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
