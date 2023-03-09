let mysql = require('mysql');

var pool = mysql.createPool({
    host: '47.104.242.213',
    port: 3306,
    database: 'hxyjDevDB',
    user: 'root',
    password: '927hxzjZB183!*#'
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