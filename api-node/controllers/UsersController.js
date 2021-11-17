const { CreateUserService } = require('../services/UsersServices');

const usersRouter = require('express').Router();

usersRouter.post('/', new CreateUserService().handle);

module.exports = usersRouter;