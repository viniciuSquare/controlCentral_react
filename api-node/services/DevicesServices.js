const {PrismaClient} = require('@prisma/client')

class DeviceService {
  async editDevice(request, response) {
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
      operationalCategoriesId,
      location
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
    if(location) {
      const locationData = await prisma.locations.findUnique({
        where: {
          id: location.id
        }
      })
    }
    response.json(device);
  }
  
  async getDevicesCategories(request, response) {
    const prisma = new PrismaClient();

    const allDevicesCategories = await prisma.deviceCategories.findMany();

    response.json(allDevicesCategories);
  }

  async createDeviceCategory(request, response) {
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

  async getDevices(request, response) {
    const prisma = new PrismaClient();

    const allDevices = await prisma.devices.findMany({
      include: {
        operationalCategory: true,
        category: true
      }
    });

    response.json(allDevices);
  }

  async getDevice(request, response) {
    const id = request.params.id;
    const { devices } = new PrismaClient();
    const device = await devices.findFirst({select: { id }})
    
    response.json(device);
  }

  async createDevice(request, response) {

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

module.exports = { 
  DeviceService
}
