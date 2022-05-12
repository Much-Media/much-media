const { Pool } = require('pg')

// const connectionString = process.env.DATABASE_CONNECTION_STRING
const DB_URI = 'postgres://atevpjyy:qPFU-xkRqm-TAg-dcbVAlfSNHn3lVdef@lallah.db.elephantsql.com/atevpjyy';


const pool = new Pool({
  // connectionString
  connectionString: DB_URI
});

module.exports = {
  query: (text, params, callback) => {
    // console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};