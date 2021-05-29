import * as Joi from 'joi';


export const EnvValidator =  Joi.object({
  // NODE_ENV: Joi.string().valid('development', 'production', 'test',).default('development'),
  PORT: Joi.number(),
  // DB_USER_NAME: Joi.string()
})
