const {PrismaClient} = require('@prisma/client')

class CreateDeviceCategoryController {
  async handle(request, response) {
    const prisma = new PrismaClient();

    let {
      title,
      isNetDev
    } = request.body;

    const deviceCategory = await prisma.deviceCategories.create({
      data: {
        title,
        isNetDev
      }
    })      
      
    response.json(deviceCategory);

  }
}

module.exports = { CreateDeviceCategoryController }