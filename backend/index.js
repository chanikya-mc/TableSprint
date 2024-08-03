const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

const port = 5000;
const jwtSecret = "your_jwt_secret_key"; // Use a strong secret key for JWT

app.get("/", (req, res) => {
    res.send("Hello World");
});

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Chanikyamc@22", // Ensure this is correct
    database: "sprint" // Make sure this matches the database name you created
});

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err.stack);
        return;
    }
    console.log("Connected to the database.");
});

app.post("/signup", async (req, res) => {
    const { email, password } = req.body;

    try {
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Insert the user into the database
        const query = "INSERT INTO users SET ?";
        db.query(query, { email, password: hashedPassword }, (err, result) => {
            if (err) {
                console.error("Error inserting data:", err.stack);
                res.status(500).send("Error registering user");
                return;
            }
            res.send("User registered successfully");
        });
    } catch (err) {
        console.error("Error hashing password:", err.stack);
        res.status(500).send("Error registering user");
    }
});

app.post("/login", (req, res) => {
    const { email, password } = req.body;
    db.query("SELECT * FROM users WHERE email = ?", [email], async (err, result) => {
        if (err) {
            console.error("Error querying data:", err.stack);
            res.status(500).send("Error logging in");
            return;
        }
        if (result.length === 0) {
            return res.status(400).send("Email or password is incorrect");
        }

        try {
            // Compare the hashed password
            const match = await bcrypt.compare(password, result[0].password);
            if (match) {
                // Generate a JWT token
                const token = jwt.sign({ email: result[0].email }, jwtSecret, { expiresIn: '1h' });
                return res.json({ message: "Login successful", token });
            } else {
                return res.status(400).send("Email or password is incorrect");
            }
        } catch (err) {
            console.error("Error comparing passwords:", err.stack);
            res.status(500).send("Error logging in");
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
