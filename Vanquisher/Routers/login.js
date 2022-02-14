const Express=require('express');

const Router=Express.Router();

//const Home_controller=require('../Controllers/home_controller.js');
const Login_controller=require('../Controllers/login_controller');



//Router.get('/',Home_controller.home);
Router.get('/sign_up',Login_controller.sign_up);
Router.get('/sign_in',Login_controller.sign_in);


module.exports = Router;