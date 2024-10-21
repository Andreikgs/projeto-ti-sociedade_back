const express = require('express');
const path = require('path');
const authRoutes = require('./routes/authRoute');
const cookieParser = require('cookie-parser');
const authenticateToken = require('./middleware/authMiddleware');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(express.static('public'));

app.use('/auth', authRoutes);

app.get('/dashboard', authenticateToken, (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'dashboard.html'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});
module.exports = app;