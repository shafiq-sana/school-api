import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Address } from './address.entity';
import { School } from './school.entity';
import { Organization } from './organization.entity';

@Injectable()
export class SchoolService {
	constructor(
		@InjectRepository(School)
		private readonly schoolRepository: Repository<School>,
		@InjectRepository(Address)
		private readonly addressRepository: Repository<Address>,
		@InjectRepository(Organization)
		private readonly organizationRepository: Repository<Organization>,
	) { }

	async updateOrCreateSchool(data: any): Promise<School> {
		const { name, address, organization, ...updateData } = data;

		let addressRecord = await this.addressRepository.findOne({ where: address });
		let organizationRecord;
		let school = await this.schoolRepository.findOne({ where: { name, address: addressRecord } });

		if (addressRecord) {
			if (!school) {
				throw new HttpException('This address already exists for a school', HttpStatus.FORBIDDEN);
			}
		}
		else {
			addressRecord = await this.addressRepository.save(address);
		}

		if (organization) {
			organizationRecord = await this.organizationRepository.findOne({ where: organization });
			if (!organizationRecord) {
				organizationRecord = await this.organizationRepository.save(organization);
			}
		}

		if (school) {
			Object.assign(school, updateData);
			school.organization = organizationRecord;

			return await this.schoolRepository.save(school);
		} else {
			const newSchool = new School();
			newSchool.name = name;
			newSchool.address = addressRecord;
			newSchool.organization = organizationRecord;
			console.log('all good till here')
			Object.assign(newSchool, updateData);

			return await this.schoolRepository.save(newSchool);
		}
	}

	async updateSchool(data: any): Promise<School> {
		const { name, address, ...updateData } = data;

		const addressRecord = await this.addressRepository.findOne({ where: address });
		const school = await this.schoolRepository.findOne({ where: { name, address: addressRecord } });

		if (school) {
			Object.assign(school, updateData);
			return await this.schoolRepository.save(school);
		} else {
			throw new Error('School not found');
		}
	}

	async findSchoolById(id: number): Promise<School> {
		return await this.schoolRepository.findOneBy({ id: id });
	}

	async findAllSchools(): Promise<School[]> {
		return await this.schoolRepository.find({ relations: ['address', 'organization'] });
	}

	async deleteSchool(id: number): Promise<void> {
		const school = await this.schoolRepository.findOneBy({ id: id });
		if (school) {
			await this.schoolRepository.remove(school);
		} else {
			throw new Error('School not found');
		}
	}
}
