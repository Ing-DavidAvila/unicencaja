import {Pool} from 'pg';

const pool = new Pool({
    host : '192.168.1.102',
    port : '5432',
    user : 'sistema',
    password : 'se.3628',
    database :'siiaaCochabamba2022-07-12'
});

module.exports = pool;