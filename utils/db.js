let mysql = require('mysql');

var pool = mysql.createPool({
    host: 'localhost',
    port: 3306,
    database: 'hxyjDevDB',
    user: 'root',
    password: 'sql927hxzjZB183!*#'
})

function query(sql, callback) {
    pool.getConnection(function(err, connection) {
        connection.query(sql, function (err, rows) {
            callback(err, rows)
            connection.release()
        })
    })
}

exports.query = query;