const { Router } = require('express');

const devicesRouter = require('./controllers/DevicesController');
const locationsRouter = require('./controllers/LocationsController');
const usersRouter = require('./controllers/UsersController');
const operationalCategoriesRouter = require('./controllers/OperationalCategoryController');

const routes = Router();

// routes.post("/login", new SessionController().handle);

routes.use("/dispositivos", devicesRouter);
routes.use("/locais", locationsRouter);
routes.use("/usuarios", usersRouter);
routes.use("/categorias-op", operationalCategoriesRouter );

module.exports= { routes };