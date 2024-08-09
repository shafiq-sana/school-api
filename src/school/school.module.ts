import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Address } from './address.entity';
import { Organization } from './organization.entity';
import { School } from './school.entity';
import { SchoolController } from './school.controller';
import { SchoolService } from './school.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([School, Address, Organization]),
  ],
  providers: [SchoolService],
  controllers: [SchoolController],
})
export class SchoolModule { }
