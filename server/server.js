const express = require('express')
const session = require('express-session')
const cors = require('cors')
const MongoStore = require('connect-mongo')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const AuthRoutes = require('./routes/AuthRoutes')
const ProductRoutes = require('./routes/ProductsRoutes')
const app = express()

// Middlewares
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('assets' , express.static('assets'))
app.use(cookieParser())
app.use(session({
    secret: 'your_secret_key',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: 'mongodb://localhost:27017/AuthenticationApp',
        ttl: 14 * 24 * 60 * 60,
    }),
    cookie: { maxAge: 14 * 24 * 60 * 60 * 1000, httpOnly: true }
}))

// Connect MongoDB
mongoose.connect('mongodb://localhost:27017/AuthenticationApp', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

// Routes
app.use('/api/auth', AuthRoutes)
app.use('/api/product', ProductRoutes)

// Server Listen
app.listen(5000, () => {
    console.log('Server listening on port 5000')
})
