const mysql = require('mysql2');
const express = require('express')


const app = express()
const port = 3000


const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'pass',
    database: 'store_tests_DB',
});


app.use(express.json())


app.get("/home", function (req, resp) {
    resp.send("Hello world!")
})

app.get("/dbtest", function (req, resp) {
    connection.connect((err) => {
        if (err) {
            console.error('Error connecting to MySQL:', err);
            return;
        }
        console.log('Connected to MySQL database');


        connection.query('SELECT * FROM products', (queryError, results) => {
            if (queryError) {
                console.error('Error executing query:', queryError);
                return;
            }


            console.log('Retrieved data:');
            console.log(results);

            resp.send(results)
            connection.end((endError) => {
                if (endError) {
                    console.error('Error closing connection:', endError);
                    return;
                }
                console.log('Disconnected from MySQL database');
            });
        });
    });



})

app.listen(port)
