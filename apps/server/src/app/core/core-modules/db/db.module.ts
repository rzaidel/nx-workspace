import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { EnvVariables } from '../../../common/enums/env-variables';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [ConfigModule],
    useFactory: (configService: ConfigService) => ({
      type: 'mysql',
      host: configService.get(EnvVariables.DB_HOST),
      port: +configService.get<number>(EnvVariables.DB_PORT),
      username: configService.get(EnvVariables.DB_USERNAME),
      password: configService.get(EnvVariables.DB_PASSWORD),
      database: configService.get(EnvVariables.DB_NAME),
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      entities: [__dirname + '/entiies/*.entity{.ts,.js}'],
      migrationsTableName: 'custom_migration_table',
      migrations: [__dirname + "/migrations/*{.ts,.js}"],
      cli: {
        migrationsDir: "migrations"
      },
      synchronize: true,
    }),
    inject: [ConfigService],
  })],
})
export class DataBaseModule {
}
