const { PrismaClient } = require(".prisma/client");
const { AccountServices } = require("../services/AccountsServices");

const accountsRouter = require('express').Router();

accountsRouter.get('/', new AccountServices().getAccounts);
accountsRouter.post('/', new AccountServices().createAccount);

module.exports = accountsRouter

