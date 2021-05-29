import { EnvVariables } from '../enums/env-variables';

export interface EnvConfig {
  [EnvVariables.PORT]: number
}
