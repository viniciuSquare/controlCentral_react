const prisma = require('./PrismaClient');

class LocationsServices {
  async getLocations (request, response) {
    const locations = await prisma.locations.findMany({
      include: {
        operationalCategory: true
      }
    });

    response.json(locations)
  }

  async createLocation(request, response) {
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
    }).finally(async ()=> await prisma.$disconnect());
    
    response.status(201).json(location);
  }

  async editLocation(request, response) {
    
    const {
      id,
      title,
      description,
      operationalCategory
    } = request.body;

    const editedLocation = await prisma.locations.update({
      where: {
        id
      },
      data: {
        title,
        description,
        operationalCategoryId: operationalCategory
      },
      include: {
        operationalCategory: true
      }
    })
    response.json(editedLocation);
  }
}

module.exports = { LocationsServices }