const { Router } = require('express');

const { CreateDeviceController, CreateDeviceCategoryController, GetDevices, GetDeviceCategories } = require('./controllers/DevicesController');

const { CreateLocationController, GetLocations } = require('./controllers/LocationsController');

const routes = Router();

// routes.post("/login", new SessionController().handle);

// DEVICES
routes.post("/dispositivos", new CreateDeviceController().handle);
routes.get("/dispositivos", new GetDevices().handle);

routes.post("/dispositivos/categoria", new CreateDeviceCategoryController().handle);
routes.get("/dispositivos/categorias", new GetDeviceCategories().handle);

// LOCATIONS
routes.post("/locais", new CreateLocationController().handle);
routes.get("/locais", new GetLocations().handle);

// OPERATIONAL CATEGORY
routes.get("/categorias-op"   );
// routes.post(
//   "/devices",
//   new CreateProductController().handle
// );

module.exports= { routes };