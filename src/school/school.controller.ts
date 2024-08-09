import { Controller, Get, Post, Delete, Body, Param } from '@nestjs/common';

import { SchoolService } from './school.service';
import { School } from './school.entity';

@Controller('schools')
export class SchoolController {
    constructor(private readonly schoolService: SchoolService) { }

    @Post()
    async updateOrCreateSchool(@Body() data: any): Promise<School> {
        return this.schoolService.updateOrCreateSchool(data);
    }

    // GET /schools/:id
    @Get(':id')
    async findSchoolById(@Param('id') id: number): Promise<School> {
        return this.schoolService.findSchoolById(id);
    }

    // GET /schools
    @Get()
    async findAllSchools(): Promise<School[]> {
        return this.schoolService.findAllSchools();
    }

    // DELETE /schools/:id
    @Delete(':id')
    async deleteSchool(@Param('id') id: number): Promise<void> {
        return this.schoolService.deleteSchool(id);
    }
}
