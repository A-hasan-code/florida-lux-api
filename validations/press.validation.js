const Joi = require("joi");

const createPost = {
  body: Joi.object().keys({
    cover: Joi.string().trim(),
    title: Joi.string().trim(),
    content: Joi.string().trim(),
  }),
};

module.exports = {
  createPost,
};
