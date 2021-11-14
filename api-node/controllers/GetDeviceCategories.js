const { PrismaClient } = require(".prisma/client");

class GetDeviceCategories {
  
  async handle(request, response) {
    const prisma = new PrismaClient();

    const allDevicesCategories = await prisma.deviceCategories.findMany();

    response.json(allDevicesCategories);
  }
}

module.exports = {GetDeviceCategories}