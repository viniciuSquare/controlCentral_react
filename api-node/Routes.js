const { Router } = require('express');

const { CreateDeviceController } = require('./controllers/CreateDevicesController');
const { CreateDeviceCategoryController } = require('./controllers/CreateDeviceCategoryController');
const { GetDeviceCategories } = require('./controllers/GetDeviceCategories');

const routes = Router();

// routes.post("/login", new SessionController().handle);

routes.post("/dispositivos", new CreateDeviceController().handle);
routes.get("/dispositivos", new CreateDeviceCategoryController().handle);

routes.post("/dispositivos/categoria", new CreateDeviceCategoryController().handle);
routes.get("/dispositivos/categorias", new GetDeviceCategories().handle);
// routes.post(
//   "/devices",
//   new CreateProductController().handle
// );

module.exports= { routes };