const {PrismaClient} = require('@prisma/client')

class CreateDeviceService  {
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
      ramal,
      operationalCategory
    } = request.body;

    if(!state) state = "Definir";

    const device = await prisma.devices.create({
      data: {
        id, 
        alias, 
        deviceCategoryId: parseInt(category), 
        specification, 
        macCable, 
        macWireless, 
        ipCable, 
        ipWireless, 
        state,
        ramal,
        operationalCategoriesId: operationalCategory
      }
    });

    response.json(device);
  }
}

class GetDevicesService {
  async handle(request, response) {
    const prisma = new PrismaClient();

    const allDevicesCategories = await prisma.devices.findMany({
      include: {
        operationalCategory: true,
        category: true
      }
    });

    response.json(allDevicesCategories);
  }
}

class GetDevice {
  async handle(request, response) {
    const id = request.params.id;
    const { devices } = new PrismaClient();
    const device = await devices.findFirst({select: { id }})
    
    response.json(device);
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

// DEVICE USER
class EditDevice {
  async handle(request, response) {
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
      ramal,
      operationalCategoriesId
    } = request.body;

    const prisma = new PrismaClient();
    const device = await prisma.devices.update({
      where: {
        id
      },
      data: {
        alias, 
        category, 
        specification, 
        macCable, 
        macWireless, 
        ipCable, 
        ipWireless, 
        state,
        ramal,
        operationalCategoriesId
      }
    })
    response.json(device);
  }
}

module.exports = { 
  CreateDeviceService, 
  GetDevicesService, 
  GetDevice,
  CreateDeviceCategoryController, 
  GetDeviceCategories,
  EditDevice
}
