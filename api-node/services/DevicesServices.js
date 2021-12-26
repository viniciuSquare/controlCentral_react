const {PrismaClient} = require('@prisma/client')

class DeviceService {
  async editDevice(request, response) {
    let { 
      id, 
      alias, 
      category, 
      serviceTag,
      cpu,
      user,
      specification, 
      macCable, 
      macWireless, 
      ipCable, 
      ipWireless, 
      state,
      isSource,
      ramal,
      operationalCategory
    } = request.body;

    const prisma = new PrismaClient();

    const device = await prisma.devices.update({
      where: {
        id
      },
      data: {
        alias, 
        serviceTag,
        cpu,
        specification, 
        macCable, 
        macWireless, 
        ipCable, 
        ipWireless, 
        state,
        ramal,
        isSource,
        category: category ? parseInt(category) : null, 
        operationalCategory: operationalCategory ? parseInt(operationalCategory) : null
      }
    })

    if(user?.id) {
      const deviceUserRelation = await prisma.deviceUser.findUnique({
        where: {
          user: {
            id: user.id
          }
        }
      })
      if(!deviceUserRelation.devicesId == id) {
        prisma.deviceUser.create({
          data: {
            device: id,
            user: user.id
          }
        })

      } else
        response.json("Relation already exists");

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
      serviceTag,
      cpu,
      specification, 
      macCable, 
      macWireless, 
      ipCable, 
      ipWireless, 
      state,
      isSource,
      ramal,
      operationalCategory
    } = request.body;


    if(!state) state = "Definir";

    if(typeof category == "object") {

      const device = await prisma.devices.create({
        data: {
          id, 
          alias, 
          serviceTag,
          cpu,
          specification, 
          macCable, 
          macWireless, 
          ipCable, 
          ipWireless, 
          state,
          ramal,
          isSource,
          category: {
            create : {
                title: category.title ,
                isNetDev: category.isNetDev=="true" ? true : false
              }
            }, 
          operationalCategory: operationalCategory ? parseInt(operationalCategory) : undefined
        }
      });
      response.json(device)

    } else {
      const device = await prisma.devices.create({
        data: {
          id, 
          alias, 
          serviceTag,
          cpu,
          specification, 
          macCable, 
          macWireless, 
          ipCable, 
          ipWireless, 
          state,
          ramal,
          isSource,
          deviceCategoryId: category ? parseInt(category) : null, 
          operationalCategoriesId: operationalCategory ? parseInt(operationalCategory) : null
        }
      });
      response.json(device)

    }
  }

  async deleteDevice(request, response) {
    const prisma = new PrismaClient();
    const {id} = request.params;
    await prisma.devices.delete({ 
      where : {
        id: parseInt(id)
      }
    })
      .finally(()=>response.json({msg: "deleted"}))    
  }
}

module.exports = { 
  DeviceService
}
