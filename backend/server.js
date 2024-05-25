const bcrypt = require('bcrypt');
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
    database: "triggers"
});

db.connect(err => {
    if (err) {
        console.error('Database connection failed: ' + err.stack);
        return;
    }
    console.log('Connected to database.');
});

// Signup route
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;

    const checkEmailQuery = "SELECT uid FROM un_veri_users WHERE email = ?";
    db.query(checkEmailQuery, [email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }

        if (result.length > 0) {
            // Email already exists, return error

            return res.status(400).json({ message: "Email already exists" });
        } else {
            // Email does not exist, proceed with inserting new user

            const insertUserQuery = "INSERT INTO un_veri_users (userName, email, password) VALUES (?, ?, ?)";
            const values = [username, email, password];
            db.query(insertUserQuery, values, (err, data) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: "Internal Server Error" });
                }
                return res.status(201).json({ message: "User created successfully" });
            });
        }
    });
});



app.use(express.json());

//login
app.post('/login', (req, res) => {
    const { email, password } = req.body;

    const getUserQuery = 'SELECT password FROM user_details WHERE email = ?';
    db.query(getUserQuery, [email], async (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (result.length === 0) {
            // User not found
            return res.status(401).json({ error: 'Unauthorized: Invalid email or password' });
        }

        const storedHashedPassword = result[0].password;

        // Compare the hashed password
        const isPasswordMatch = await bcrypt.compare(password, storedHashedPassword);
        
        if (!isPasswordMatch) {
            // Invalid credentials
            return res.status(401).json({ error: 'Unauthorized: Invalid email or password' });
        }

        // User authenticated successfully
        return res.status(200).json({ message: 'Login successful' });
    });
});




app.listen(8081, () => {
    console.log("Listening on port 8081...");
});
