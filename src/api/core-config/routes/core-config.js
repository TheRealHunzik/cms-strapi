'use strict';

/**
 * core-config router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::core-config.core-config');
