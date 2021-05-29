import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { EnvValidator } from '../../common/joi/env-config.validator';
import { Environments } from '@solara-workspace/environments';

const ENV_PATH = './apps/server/environments';

function getEnvPaths(): string[] {
  const envs = [];
  for (const key in Environments) {
    envs.push(`${ENV_PATH}/${key}.env`);
  }
  return envs
}


@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: getEnvPaths(),
      isGlobal: true,
      validationSchema: EnvValidator,
    })
  ]
})
export class SystemConfigModule { }
