const { Router } = require('express');

const {devicesRouter, devicesCategoryRouter} = require('./controllers/DevicesController');
const locationsRouter = require('./controllers/LocationsController');
const usersRouter = require('./controllers/UsersController');
const accountsRouter = require('./controllers/AccountsController');
const operationalCategoriesRouter = require('./controllers/OperationalCategoryController');

const routes = Router();

// routes.post("/login", new SessionController().handle);

routes.use("/devices", devicesRouter);
routes.use("/device-categories", devicesCategoryRouter);
routes.use("/locals", locationsRouter);
routes.use("/accounts", accountsRouter);
routes.use("/users", usersRouter);
routes.use("/categorias-op", operationalCategoriesRouter );

module.exports= { routes };