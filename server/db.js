const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'login',
  password: 'pollitofrito',
  port: 5432,
});

module.exports = pool;
