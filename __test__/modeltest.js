const { Pool } = require('pg')

const PG_URI = 'postgres://atevpjyy:qPFU-xkRqm-TAg-dcbVAlfSNHn3lVdef@lallah.db.elephantsql.com/atevpjyy'


const pool = new Pool({
  connectionString: PG_URI
});

module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
};