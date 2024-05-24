const express = require('express');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "triggers" // Corrected typo here
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO user_details (`userName`, `email`, `password`) VALUES (?)";
    const values = [
        req.body.username, // Make sure the fields match the ones in your frontend
        req.body.email,
        req.body.password
    ];
    db.query(sql, [values], (err, data) => {
        if (err) {
            console.error(err);
            return res.json("Error");
        }
        return res.json(data);
    });
});

app.listen(8081, () => {
    console.log("Listening on port 8081...");
});