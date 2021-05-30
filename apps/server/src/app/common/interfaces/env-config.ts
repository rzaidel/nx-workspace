import { EnvVariables } from '../enums/env-variables';

export interface EnvConfig {
  [EnvVariables.SERVER_PORT]: number
}
