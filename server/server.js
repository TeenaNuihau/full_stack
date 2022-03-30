const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const posts = require('./routes/api/posts');
const userRoutes = require('./routes/api/user.routes');

const { checkUser, requireAuth } = require('./middleware/auth.middleware');

require('dotenv').config({path: './config/.env'});
require('./models/dbConfig');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());

app.get('/api', (req,res) => {
    res.json({
        message: 'Welcome to the API'
    });
});

// jwt
app.get('*', checkUser);
app.get('/jwtid', requireAuth, (req,res) => {
    res.status(200).send(res.locals.user._id)
});

// Routes which should handle requests
app.use('/api/posts', posts);
app.use('/api/user', userRoutes);

// handle production
if (process.env.NODE_ENV === 'production') {
    // static folder
    app.use(express.static(__dirname + '/public/'));

    // handle spa
    app.get(/.*/, (req,res) => res.sendFile(__dirname + '/public/index.html'));
}

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));