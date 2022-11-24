const express = require('express');
const UserRouter = express.Router();

UserRouter.post('/register', (req, res) => {
    res.json('User Created');
});

UserRouter.post('/login', (req, res) => {
    res.json('User Login');
});

module.exports = UserRouter;