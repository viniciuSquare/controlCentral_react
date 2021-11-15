const {PrismaClient} = require('@prisma/client')

class CreateDeviceController  {
  async handle(request, response) {

    const prisma = new PrismaClient();

    let { 
      id, 
      alias, 
      category, 
      specification, 
      macCable, 
      macWireless, 
      ipCable, 
      ipWireless, 
      state,
      ramal 
    } = request.body;

    if(!state) state = "Definir";

    const device = await prisma.devices.create({
      data: {
        id, 
        alias, 
        category, 
        specification, 
        macCable, 
        macWireless, 
        ipCable, 
        ipWireless, 
        state,
        ramal 
      }
    });

    response.json(device);
  }
}

class GetDevices {
  async handle(request, response) {
    const prisma = new PrismaClient();

    const allDevicesCategories = await prisma.devices.findMany();

    response.json(allDevicesCategories);
  }
}

// DEVICE CATEGORY
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

class GetDeviceCategories {
  async handle(request, response) {
    const prisma = new PrismaClient();

    const allDevicesCategories = await prisma.deviceCategories.findMany();

    response.json(allDevicesCategories);
  }
}

module.exports = { 
  CreateDeviceController, 
  GetDevices, 
  CreateDeviceCategoryController, 
  GetDeviceCategories
}
