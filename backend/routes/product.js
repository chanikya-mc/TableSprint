const express = require('express');
const router = express.Router();
const mysql = require('mysql');

// Create a connection to the database
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "yourpassword",
    database: "yourdatabase"
});

// Connect to the database
db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the database');
});

// Get all products
router.get('/products', (req, res) => {
    const query = 'SELECT * FROM products';
    db.query(query, (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching products' });
        }
        res.json(results);
    });
});

// Get a specific product by ID
router.get('/products/:id', (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM products WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            return res.status(500).json({ error: 'Error fetching product' });
        }
        res.json(results[0]);
    });
});

// Create a new product
router.post('/products', (req, res) => {
    const { name, category, image, status, quantity } = req.body;
    const query = 'INSERT INTO products (name, category, image, status, quantity) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [name, category, image, status, quantity], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error creating product' });
        }
        res.status(201).json({ message: 'Product created successfully' });
    });
});

// Update a product
router.put('/products/:id', (req, res) => {
    const { id } = req.params;
    const { name, category, image, status, quantity } = req.body;
    const query = 'UPDATE products SET name = ?, category = ?, image = ?, status = ?, quantity = ? WHERE id = ?';
    db.query(query, [name, category, image, status, quantity, id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error updating product' });
        }
        res.json({ message: 'Product updated successfully' });
    });
});

// Delete a product
router.delete('/products/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM products WHERE id = ?';
    db.query(query, [id], (err, result) => {
        if (err) {
            return res.status(500).json({ error: 'Error deleting product' });
        }
        res.json({ message: 'Product deleted successfully' });
    });
});

module.exports = router;
