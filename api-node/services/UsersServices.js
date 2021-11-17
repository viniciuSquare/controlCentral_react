const { PrismaClient } = require(".prisma/client");


class CreateUserService {
  async handle(request, response) {
    const prisma = new PrismaClient();
    const {
      name,
      username,
      department
    } = request.body;
    
    const user = await prisma.user.create({
      data: {
        name,
        username,
        department  
      }
    })

    response.status(201).json(user);
  }
}

module.exports = { 
  CreateUserService
}