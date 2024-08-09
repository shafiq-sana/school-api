import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { Address } from './school/address.entity';
import { Organization } from './school/organization.entity';
import { School } from './school/school.entity';
import { SchoolModule } from './school/school.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10) || 5432,
      username: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      entities: [Address, Organization, School],
      synchronize: true,
    }),
    SchoolModule,
  ],
})
export class AppModule { }
