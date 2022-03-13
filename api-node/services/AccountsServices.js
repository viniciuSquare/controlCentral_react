const prisma = require('./PrismaClient');

class AccountServices {

  async getAccounts(request, response) {
    const accounts = await prisma.accounts.findMany({
      include : {
        accountType: true
      }
    })
      .catch(error => console.log(error));

    response.json(accounts)


  }

  async createAccount(request, response) {

    const {
      address,
      service,
      user
    } = request.body;

    if(typeof service == "object" ) {
      const account = await prisma.accounts.create({
        data: {
          address,
          userDeviceId: user,
          accountType: {
            create : {
              name: service.name,
              description: service.description
            }
          },
        }
      })
      
      response.json(account);
    } else {
      const account = await prisma.accounts.create({
        data: {
          address,
          accountType: service,
          
        }
      })
      response.json(account);
    }
  }
}

module.exports = { AccountServices }