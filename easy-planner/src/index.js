import { createConnection } from 'mysql';

var connection = createConnection({
    host: 'localhost:8888',
    user: 'root',
    password: 'root',
    database: 'easyplannerdb'
})

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected...')

        connection.query('SELECT * FROM role', function (err, results) {
            if (err) throw err
            console.log(results[0].role_id)
            console.log(results[0].type)
        })
})

