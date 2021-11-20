const { PrismaClient } = require(".prisma/client");

class CreateUserService {
  async handle(request, response) {
    const prisma = new PrismaClient();
    const {
      name,
      username,
      location
    } = request.body;

    if(typeof location == "object") {
      const user = await prisma.users.create({
        data: {
          name,
          username,
          department : {
            create : { 
              title : location.title,
              description : location.description
            }
          }
        },
        include : {
          department: true
        }
      }).catch(({code})=>{
        switch(code) {
          case "P2002":
            response.status(400).json({
              message: "Username is already taken, try again"
            })
            break;
        }
      });

      response.status(201).json(user);

    } else {
      const user = await prisma.users.create({
        data: {
          name,
          username,
          locationsId: location
        },
        include : {
          department: true
        }
      }).catch(errorCatch);
      response.status(201).json(user);
    }

  }  
}

class GetUsersService {
  async handle(request, response) {
    const prisma = new PrismaClient();

    const users = 
      await prisma.users.findMany({
        include : {
          department: true
        }
      }).then(result => result)
        .catch(error =>{ 
          response.status(400).json(error)
          console.log(error)

        })

    response.json(users);
  }
}

module.exports = { 
  CreateUserService,
  GetUsersService
}