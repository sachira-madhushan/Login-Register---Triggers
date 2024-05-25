const bcrypt = require('bcrypt');
const db = require('../db');

const signup = (req, res) => {
    const { username, email, password } = req.body;

    const checkEmailQuery = "SELECT uid FROM un_veri_users WHERE email = ?";
    db.query(checkEmailQuery, [email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ message: "Internal Server Error" });
        }

        if (result.length > 0) {
            return res.status(400).json({ message: "Email already exists" });
        } else {
            bcrypt.hash(password, 10, (err, hashedPassword) => {
                if (err) {
                    console.error(err);
                    return res.status(500).json({ message: "Internal Server Error" });
                }

                const insertUserQuery = "INSERT INTO un_veri_users (userName, email, password) VALUES (?, ?, ?)";
                const values = [username, email, hashedPassword];
                db.query(insertUserQuery, values, (err, data) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ message: "Internal Server Error" });
                    }
                    return res.status(201).json({ message: "User created successfully" });
                });
            });
        }
    });
};

const login = (req, res) => {
    const { email, password } = req.body;

    const getUserQuery = 'SELECT password FROM un_veri_users WHERE userName = ?';
    db.query(getUserQuery, [email], (err, result) => {
        if (err) {
            console.error(err);
            return res.status(500).json({ error: 'Internal Server Error' });
        }

        if (result.length === 0) {
            return res.status(401).json({ error: 'Unauthorized: Invalid email or password' });
        }

        const hashedPassword = result[0].password;

        bcrypt.compare(password, hashedPassword, (err, isMatch) => {
            if (err) {
                console.error(err);
                return res.status(500).json({ error: 'Internal Server Error' });
            }

            if (!isMatch) {
                return res.status(401).json({ error: 'Unauthorized: Invalid email or password' });
            }

            return res.status(200).json({ message: 'Login successful' });
        });
    });
};

const verification = (req, res) => {
    
}

module.exports = {
    signup,
    login
};
