'use strict'

var express =require('express');
var SedeController = require('../controller/sede');
var ZonaController = require('../controller/zona');
var api = express.Router();

api.get('/sedes',SedeController.getSedes);
api.get('/zonas',ZonaController.getZonas);

api.get('/sede/:id?',SedeController.getSede);
api.get('/zona/:id?',ZonaController.getZona);

api.post('/sede',SedeController.saveSede);
api.post('/zona',ZonaController.saveZona);

api.put('/sede/:id',SedeController.updateSede);
api.put('/zona/:id',ZonaController.updateZona);

api.delete('/sede/:id',SedeController.deleteSede);
api.delete('/zona/:id',ZonaController.deleteZona);


module.exports = api;