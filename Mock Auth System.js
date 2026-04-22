
const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

const PORT = 3000;
const SECRET_KEY = 'dev-secret-key-123'; // In a real app, this goes in .env

app.use(express.json());

// 1. Simple Login Logic (Mocking a database check)
app.post('/login', (req, res) => {
    const { username, password } = req.body;

    // Standard dev "mock" check
    if (username === 'admin' && password === 'password123') {
        const token = jwt.sign({ user: username }, SECRET_KEY, { expiresIn: '1h' });
        return res.json({ success: true, token });
    }

    res.status(401).json({ message: 'Invalid credentials' });
});

// 2. Custom Middleware to protect routes (Advanced concept)
const authenticateToken = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1]; // Bearer <token>

    if (!token) return res.status(401).json({ message: 'No token provided' });

    jwt.verify(token, SECRET_KEY, (err, decoded) => {
        if (err) return res.status(403).json({ message: 'Token expired or invalid' });
        req.user = decoded;
        next();
    });
};

// 3. Protected Route
app.get('/dashboard', authenticateToken, (req, res) => {
    res.json({ 
        message: `Welcome to the secure dashboard, ${req.user.user}!`,
        sensitiveData: "The secret code is 42."
    });
});

// 4. Basic UI to test it
app.get('/', (req, res) => {
    res.send('<h2>Auth API is running.</h2><p>Use Postman or fetch() to test /login and /dashboard</p>');
});

app.listen(PORT, () => console.log(`Auth Server: http://localhost:${PORT}`));
