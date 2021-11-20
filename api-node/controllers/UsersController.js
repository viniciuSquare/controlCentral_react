const { CreateUserService, GetUsersService } = require('../services/UsersServices');

const usersRouter = require('express').Router();

usersRouter.post('/', new CreateUserService().handle);
usersRouter.get('/', new GetUsersService().handle);


module.exports = usersRouter;