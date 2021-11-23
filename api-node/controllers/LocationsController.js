const { LocationsServices } = require('../services/LocationsServices');

const locationsRouter = require('express').Router();

locationsRouter.post('/', new LocationsServices().createLocation);
locationsRouter.get('/',  new LocationsServices().getLocations);
locationsRouter.put('/',  new LocationsServices().editLocation);

module.exports = locationsRouter