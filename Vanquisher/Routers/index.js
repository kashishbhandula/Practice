const Express=require('express');

const Router=Express.Router();



Router.use('/',require('./home.js'));
Router.use('/login',require('./login'));








module.exports = Router;