const Express=require('express');

const Router=Express.Router();



Router.use('/',require('./home.js'));


module.exports = Router;