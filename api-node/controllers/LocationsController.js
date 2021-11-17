const { 
  GetLocationsService, 
  CreateLocationService
} = require('../services/LocationsServices');

const locationsRouter = require('express').Router();

locationsRouter.post('/', new CreateLocationService().handle)
locationsRouter.get('/',  new GetLocationsService().handle)

module.exports = locationsRouter