const express = require('express');
const cors = require('cors');
const signupRoute = require('./routes/signup');
const loginRoute = require('./routes/login');
// const db = require('./db');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/signup', signupRoute);
app.use('/login', loginRoute);

app.listen(8081, () => {
    console.log("Listening on port 8081...");
});
