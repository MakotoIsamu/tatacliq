const express = require('express');
const session = require('express-session');
const cors = require('cors');
const MongoStore = require('connect-mongo');
const mongoose = require('mongoose');
const cookieParser = require('cookie-parser');
const AuthRoutes = require('./routes/AuthRoutes');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const app = express();

// Middlewares
app.use(helmet());
app.use(morgan('combined'));
app.use(cors({
    origin: 'https://tatacliq-hpc7.vercel.app', // Your frontend URL
    methods: ['GET', 'POST', 'OPTIONS'], // Add OPTIONS to allowed methods
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'] // Specify allowed headers
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/assets', express.static('assets'));
app.use(cookieParser());
app.use(session({
    secret: process.env.SESSION_SECRET || 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI,
        ttl: 14 * 24 * 60 * 60,
    }),
    cookie: { 
        maxAge: 14 * 24 * 60 * 60 * 1000, 
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'none' // Important for cross-site cookies
    }
}));

// Connect MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// CORS Preflight
app.options('*', cors()); // Enable preflight for all routes

// Routes
app.use('/api/auth', AuthRoutes);

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});

// Server Listen
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});