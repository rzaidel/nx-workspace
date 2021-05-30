import * as Joi from 'joi';
import { EnvVariables } from '../enums/env-variables';


export const EnvValidator =  Joi.object({
  NODE_ENV: Joi.string().valid('development', 'production', 'test',).default('development'),
  [EnvVariables.SERVER_PORT]: Joi.number().default(3000),
  [EnvVariables.DB_PORT]: Joi.number().default(3306),
  [EnvVariables.DB_HOST]: Joi.string().default('localhost'),
  [EnvVariables.DB_NAME]: Joi.string().default('solara_db'),
  [EnvVariables.DB_USERNAME]: Joi.string().default('root'),
  [EnvVariables.DB_PASSWORD]: Joi.alternatives().try( Joi.number(), Joi.string() ).default('12345678'),
})
