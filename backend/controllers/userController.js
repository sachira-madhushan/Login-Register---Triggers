import connectDB from '../configs/db.js';
import bcrypt from 'bcryptjs';
import sendMail from '../configs/mailer.js';

const db = connectDB();

export const registerUser = async (req, res) => {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedPass = await bcrypt.hash(req.body.password, salt);
        const token = await bcrypt.hash(req.body.email, salt);

        const values = [
            req.body.name,
            req.body.email,
            hashedPass,
            token
        ];
        
        
        console.log(values.email);

        // Check the username availability
        const query2 = "SELECT UserID FROM user WHERE Name = ?";
        db.query(query2, [req.body.name], (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Database query error..." });
            }
            if (data.length > 0) {
                return res.status(400).json({ message: "Username already exists!!!" });
            }

            // Check if the email already exists
            const query3 = "SELECT UserID FROM user WHERE Email = ?";
            db.query(query3, [req.body.email], (err, data) => {
                if (err) {
                    console.log(err);
                    return res.status(500).json({ message: "Database query error..." });
                }
                if (data.length > 0) {
                    return res.status(400).json({ message: "Email already exists!!!" });
                }

                // Insert the new user into the database
                const query = "INSERT INTO user(Name, Email, Password, Token) VALUES(?)";
                db.query(query, [values], (err, data) => {
                    if (err) {
                        console.log(err);
                        return res.status(500).json({ message: "Database query error..." });
                    } else {
                        sendMail(req.body.email, token, res)
                            .then(() => {
                                return res.status(201).json({ message: "User created successfully. Please check your email to verify your account." });
                            })
                            .catch((err) => {
                                console.log(err);
                                return res.status(500).json({ message: "Failed to send verification email." });
                            });
                    }
                });
            });
        });
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Server error" });
    }
};

//@des login user
//@route api/user/login
//@access public
export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        const query = "SELECT * FROM user WHERE Email = ?";
        db.query(query, [email], async (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Database query error..." });
            } else {
                if (data.length > 0) {
                    const validPassword = await bcrypt.compare(password, data[0].Password);
                    if (validPassword) {
                        return res.status(200).json({ message: "Login success!" });
                    } else {
                        return res.status(400).json({ message: "Email or Password Incorrect!" });
                    }
                } else {
                    return res.status(400).json({ message: "Email or Password Incorrect!" });
                }
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error..." });
    }
};

//@des verify the user using the token link
//@route api/user/verify
//@access public
export const verifyUser = (req, res) => {
    try {
        const token = req.query.token;
        const query = "SELECT * FROM user WHERE Token = ?";

        db.query(query, [token], async (err, data) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Database query error..." });
            } else {
                if (data.length > 0) {
                    return res.status(200).json({ message: "Verified!" });
                } else {
                    return res.status(400).json({ message: "Invalid link!" });
                }
            }
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server error..." });
    }
};
