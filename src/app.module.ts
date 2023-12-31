import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CommonModule } from './common/common.module';
import { ConfigModule } from '@nestjs/config';
import * as Joi from 'joi';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
	imports: [
		CommonModule,
		ConfigModule.forRoot({
			isGlobal: true,
			ignoreEnvFile: process.env.NODE_ENV === 'prod',
			validationSchema: Joi.object({
				NODE_ENV: Joi.string().valid('dev', 'prod', 'test').required(),
				// DB_HOST: Joi.string().required(),
				// DB_PORT: Joi.string().required(),
				// DB_USERNAME: Joi.string().required(),
				// DB_PASSWORD: Joi.string().required(),
				// DB_NAME: Joi.string().required(),
			}),
			envFilePath: process.env.NODE_ENV === 'prod' ? '.env.prod' : '.env.dev',
		}),
		// TypeOrmModule.forRoot({
		// 	type: 'mysql',
		// 	host: process.env.DB_HOST,
		// 	port: +process.env.DB_PORT,
		// 	username: process.env.DB_USERNAME,
		// 	password: process.env.DB_PASSWORD,
		// 	database: process.env.DB_NAME,
		// 	synchronize: true,
		// 	logging: true,
		// 	entities: [],
		// }),
	],
	controllers: [AppController],
	providers: [AppService],
})
export class AppModule {}
