const Express=require('express');

const Router=Express.Router();

const Home_controller=require('../Controllers/home_controller.js');
const Login_controller=require('../Controllers/login_controller');



Router.get('/',Home_controller.home);



module.exports = Router;