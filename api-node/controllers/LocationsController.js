const {PrismaClient} = require('@prisma/client')

class CreateLocationController {
  async handle(request, response) {
    const prisma = new PrismaClient();
    let {
      title,
      description,
      operationCategory
    } = request.body;
    
    const location = await prisma.locations.create({
      data: {
        title,
        description,
        operationCategory
      }
    })

    response.status(201).json(location);
  }
}

class GetLocations {
  async handle (request, response) {
    const prisma = new PrismaClient();

    const locations = await prisma.locations.findMany();

    response.json(locations)
  }

}

module.exports = {CreateLocationController, GetLocations}