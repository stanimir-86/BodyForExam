const authController = require('express').Router();
const { register } = require('../services/userService.js');



authController.get('/register', (req, res) => {

    //TODO replace with actual view by assigment
    res.render('register', {
        title: 'Register Page'
    });
});

authController.post('/register', async (req, res) => {
    const token = await register(req.body.username, req.body.password);


    res.cookie('token', token);
    res.redirect('/auth/register');

});

module.exports = authController;