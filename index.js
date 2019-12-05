
const { DataSource } = require("apollo-datasource");
const Sequelize = require('sequelize');
// if you want to load in config outside constructor
// const config = require(`${__dirname}/../config/config.js`)[env];

// TODO: use, remove, convert
// const crypto = require("crypto");
// const knexTinyLogger = require("knex-tiny-logger").default;

const { DEBUG } = process.env;

let hasLogger = false;

class MYSQLDataSource extends DataSource {
  constructor(sequelizeConfig) {
    super();

    this.context;
    this.cache;
    this.db = new Sequelize(sequelizeConfig);

    const _this = this;
    // if (!this.db.cache) {
    //   Knex.QueryBuilder.extend("cache", function(ttl) {
    //     return _this.cacheQuery(ttl, this);
    //   });
    // }
  }

  initialize(config) {
    this.context = config.context;
    this.cache = config.cache || new InMemoryLRUCache();

    // if (DEBUG && !hasLogger) {
    //   hasLogger = true; // Prevent duplicate loggers
    //   knexTinyLogger(this.db); // Add a logging utility for debugging
    // }
  }

  // cacheQuery(ttl = 5, query) {
  //   const cacheKey = crypto
  //     .createHash("sha1")
  //     .update(query.toString())
  //     .digest("base64");

  //   return this.cache.get(cacheKey).then(entry => {
  //     if (entry) return Promise.resolve(JSON.parse(entry));

  //     return query.then(rows => {
  //       if (rows) this.cache.set(cacheKey, JSON.stringify(rows), { ttl });

  //       return Promise.resolve(rows);
  //     });
  //   });
  // }
}

module.exports = { MYSQLDataSource };
