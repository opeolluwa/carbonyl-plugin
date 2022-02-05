require('dotenv').config();
module.exports = {
  "development": {
    "username": "opeolluwa_drizzle",
    "password": "39F#0sts",
    "database": "opeolluwa_sandvalley",
    "host": "mysql.db.mdbgo.com",
    "dialect": "mysql"
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASS,
    "database": process.env.DB_SCHEMA,
    "host": process.env.BD_HOST,
    "dialect": "mysql"
  },
  "production": {
    "username": "opeolluwa_drizzle",
    "password": "39F#0sts",
    "database": "opeolluwa_sandvalley",
    "host": "mysql.db.mdbgo.com",
    "dialect": "mysql"
  }
}