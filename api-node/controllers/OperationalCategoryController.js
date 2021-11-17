const { GetOperationalCategoriesService, CreateOperationalCategoryService } = require('../services/OperationalCategoriesServices');

const operationalCategoriesRouter = require('express').Router();

operationalCategoriesRouter.get('/', new GetOperationalCategoriesService().handle);
operationalCategoriesRouter.post('/', new CreateOperationalCategoryService().handle);

module.exports = operationalCategoriesRouter;