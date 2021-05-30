import * as Joi from 'joi';
import { EnvVariables } from '../enums/env-variables';


export const EnvValidator =  Joi.object({
  // NODE_ENV: Joi.string().valid('development', 'production', 'test',).default('development'),
  [EnvVariables.SERVER_PORT]: Joi.number(),
  [EnvVariables.DB_PORT]: Joi.number().default(),
  [EnvVariables.DB_HOST]: Joi.string().default('localhost'),
  [EnvVariables.DB_NAME]: Joi.string(),
  [EnvVariables.DB_USERNAME]: Joi.string().default('root'),
  [EnvVariables.DB_PASSWORD]: Joi.alternatives().try(
    Joi.number(),
    Joi.string()
  ).default('1234'),
})
