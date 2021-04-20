const { request, response } = require('express');
const express = require('express');

const AdmController = require('./controllers/AdmController');
const LeaderController = require('./controllers/LeaderController');
const EmployeeController = require('./controllers/EmployeeController');
const ActivityController = require('./controllers/ActivityController');
const RdcController = require('./controllers/RdcController');
const ProfileController = require('./controllers/ProfileController');
const LoginController = require('./controllers/LoginController');
const LoginControllerLeader = require('./controllers/LoginControllerLeader');
const RdcResponseController = require('./controllers/RdcResponseController');

const routes = express.Router();

routes.get('/adms', AdmController.index);
routes.post('/adms', AdmController.create);
routes.delete('/adms/:id', AdmController.delete);
routes.put('/adms/:id', AdmController.update);

routes.get('/leaders',LeaderController.index);
routes.post('/leaders',LeaderController.create);
routes.delete('/leaders/:id',LeaderController.delete);
routes.put('/leaders/:id',LeaderController.update);

routes.get('/employees',EmployeeController.index);
routes.post('/employees',EmployeeController.create);
routes.delete('/employees/:id',EmployeeController.delete);
routes.put('/employees/:id',EmployeeController.update);

routes.get('/activities',ActivityController.index);
routes.post('/activities',ActivityController.create);
routes.delete('/activities/:id',ActivityController.delete);
routes.put('/activities/:id',ActivityController.update);

routes.get('/rdcs',RdcController.index);
routes.post('/rdcs',RdcController.create);
routes.delete('/rdcs/:id',RdcController.delete);
routes.put('/rdcs/:id',RdcController.update);

routes.get('/response',RdcResponseController.index);
routes.post('/response',RdcResponseController.create);
routes.delete('/response/:id',RdcResponseController.delete);

routes.get('/profiles',ProfileController.index);

routes.post('/login', LoginController.create);
routes.post('/leaderlogin', LoginControllerLeader.create);

module.exports = routes;