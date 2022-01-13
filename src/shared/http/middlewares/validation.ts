import { celebrate, Segments, Joi } from 'celebrate';

export const validationShow = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const validationCreate = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2),
    quantity: Joi.number().required(),
  },
});

export const validationDelete = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
});

export const validationUpdate = celebrate({
  [Segments.PARAMS]: {
    id: Joi.string().uuid().required(),
  },
  [Segments.BODY]: {
    name: Joi.string().required(),
    price: Joi.number().precision(2),
    quantity: Joi.number().required(),
  },
});

export const validationUser = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required().min(6).max(36),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(18),
  },
});

export const validationAuthenticate = celebrate({
  [Segments.BODY]: {
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6).max(18),
  },
});

export const validationForgotPassword = celebrate({
  [Segments.BODY]: {
    email: Joi.string().required().email(),
  },
});

export const validationResetPassword = celebrate({
  [Segments.BODY]: {
    token: Joi.string().uuid().required(),
    password: Joi.string().required().min(6).max(18),
    password_confirmation: Joi.string().required().valid(Joi.ref('password')),
  },
});

export const validationProfile = celebrate({
  [Segments.BODY]: {
    name: Joi.string().required().min(6).max(36),
    email: Joi.string().required().email(),
    old_password: Joi.string().min(6).max(18),
    password: Joi.string().optional().min(6).max(18),
    password_confirmation: Joi.string()
      .valid(Joi.ref('password'))
      .when('password', {
        is: Joi.exist(),
        then: Joi.required(),
      }),
  },
});
