var mysql = require('mysql');

var db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nav@gur1",
    database: "Ecomerse_data"
});

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("database connected");
//     var sql = "DROP TABLE registration";
//     db.query(sql, function(err, result) {
//         if (err) throw err;
//         console.log("Table deleted");
//     });
// });

// db.connect(function(err) {
//     if (err) throw err;
//     console.log("database connected");
//     var sql = "CREATE TABLE registration(user_id INT AUTO_INCREMENT PRIMARY KEY,Name VARCHAR(320) NOT NULL ,Mobile_no VARCHAR(320) NOT NULL ,Email VARCHAR(320) NOT NULL ,password VARCHAR(255) NOT NULL,unique key (Mobile_no),unique key (Email))"
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log("table created");
//     })
// })



// db.connect(function(err) {
//     if (err) throw err;
//     console.log("database connected");
//     var sql = "CREATE TABLE products(product_id INT AUTO_INCREMENT PRIMARY KEY,color VARCHAR(320) NOT NULL ,size VARCHAR(320) NOT NULL,user_id int,foreign key(user_id) references registration(user_id))"
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log("table created");
//     })
// })


// db.connect(function(err) {
//     if (err) throw err;
//     console.log("database connected");
//     var sql = "CREATE TABLE Orders(Orders_id INT AUTO_INCREMENT PRIMARY KEY,date_time VARCHAR(320) NOT NULL ,product_id int,user_id int,foreign key(product_id) references products(product_id),foreign key(user_id) references registration(user_id))"
//     db.query(sql, (err, result) => {
//         if (err) throw err;
//         console.log("table created");
//     })
// })