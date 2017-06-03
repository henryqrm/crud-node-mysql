const mysql = require('mysql');
const DATABASE_MYSQL = {
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'myTest'
};

module.exports = {
    query
};

function query(queryString) {
    return Promise
        .resolve(queryString)
        .then(validateInputQuery)
        .then(validadeSQLInject)
        .then(queryString => {
            const connection = mysql.createConnection(DATABASE_MYSQL);
            return new Promise((resolve, reject) => {
                connection.connect(err => {
                    if (err) throw 'Connection error';
                });
                connection.query(queryString, (err, rows, fields) => {
                    if (err) {
                        console.log(err)
                        reject(err);
                    }
                    resolve(rows);
                });
                connection.end();
            });
        });
}

function validateInputQuery(queryString) {
    //...
    return queryString;
}

function validadeSQLInject(queryString) {
    //...
    return queryString;
}
