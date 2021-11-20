const {PrismaClient} = require('@prisma/client')

class CreateOperationalCategoryService {
  async handle(request, response) {
    const prisma = new PrismaClient();

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
    const prisma = new PrismaClient();

    const operationalCategories = await prisma.operationalCategories.findMany();

    response.json(operationalCategories);
  }
}

module.exports = {
  CreateOperationalCategoryService,
  GetOperationalCategoriesService
}