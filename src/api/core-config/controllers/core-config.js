'use strict';

/**
 * core-config controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::core-config.core-config');
