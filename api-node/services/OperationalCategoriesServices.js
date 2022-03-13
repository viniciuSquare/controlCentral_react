const prisma = require('./PrismaClient');

class CreateOperationalCategoryService {
  async handle(request, response) {
    

    let {
      title,
      description
    } = request.body;

    const operationalCategories = await prisma.operationalCategories.create({
      data: {
        title,
        description
      }
    }).catch(error=>response.status.json(error));

    response.json(operationalCategories);

  }
}

class GetOperationalCategoriesService {
  async handle(request, response) {
    

    const operationalCategories = await prisma.operationalCategories.findMany();

    response.json(operationalCategories);
  }
}

module.exports = {
  CreateOperationalCategoryService,
  GetOperationalCategoriesService
}