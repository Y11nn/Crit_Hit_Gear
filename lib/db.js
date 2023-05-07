const pgp = require('pg-promise')({

});


const conn = 'postgres://postgres:Ekkokappa12@localhost:5432/crit_hit_gear_db';

const db = pgp(conn);

module.exports = db;