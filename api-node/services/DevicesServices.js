const prisma = require('./PrismaClient');

function getDeviceFromRequestBody( requestBody ) {
  const { 
    id, 
    cpu,
    category, 
    deviceCategoryId,
    serviceTag,
    ipCable, 
    macCable, 
    ipWireless, 
    macWireless, 
    isSource,
    inventoryCode,
    hostname,
    specification, 
    brand,
    model,
    state,
    ramal
  } = requestBody;

  device = { 
    id, 
    cpu,
    category, 
    deviceCategoryId,
    serviceTag,
    ipCable, 
    macCable, 
    ipWireless, 
    macWireless, 
    isSource,
    inventoryCode,
    hostname,
    specification, 
    brand,
    model,
    state,
    ramal
  } 
  console.log("Device from res.body", device);

  return  device;
}

class DeviceService {
  async getDevices(request, response) {

    const allDevices = await prisma.devices.findMany({
      include: {
        category: true
      }
    });

    response.json(allDevices);
  }

  async createDevice(request, response) {
    const newDeviceData = getDeviceFromRequestBody(request.body);

    if(!newDeviceData.state) newDeviceData.state = "Definir";

    if(typeof newDeviceData.category == "object") { // CATEGORY CREATION
      const newDevice = await prisma.devices.create({
        data: {
          ...newDeviceData,
          category: {
            create : {
                title: newDeviceData.category.title ,
                isNetDev: newDeviceData.category.isNetDev=="true" ? true : false
              }
            }, 
        }
      });
            
      response.status(201).json(newDevice);

    } else {

      const newDevice = await prisma.devices.create({
        data: {
          ...newDeviceData,
          deviceCategoryId: newDeviceData.deviceCategoryId ? parseInt(newDeviceData.deviceCategoryId) : null, 
        }
      });

      response.status(201).json(newDevice);
    }
  }
  
  async editDevice(request, response) {
    const newDeviceData = getDeviceFromRequestBody(request.body);

    const editedDevice = await prisma.devices.update({
      where: {
        id: newDeviceData.id
      },
      data: {
        ...newDeviceData,
        deviceCategoryId: newDeviceData.deviceCategoryId ? parseInt(newDeviceData.deviceCategoryId) : null, 
      }
    })

    // TODO -> HANDLE RELATIONS

    // if(user?.id) {
    //   const deviceUserRelation = await prisma.deviceUser.findUnique({
    //     where: {
    //       user: {
    //         id: user.id
    //       }
    //     }
    //   })
    //   if(!deviceUserRelation.devicesId == id) {
    //     prisma.deviceUser.create({
    //       data: {
    //         device: id,
    //         user: user.id
    //       }
    //     })

    //   } else
    //     response.json("Relation already exists");
    // }

    response.json(editedDevice);
  }

  async getDevice(request, response) {
    const {id} = request.params;
    const queryDevice = await prisma.devices
      .findFirst({
        where: { 
          id: parseInt(id) 
        }
      })
    
    response.json(queryDevice);
  }

  async deleteDevice(request, response) {
    const {id} = request.params;
    await prisma.devices.delete({ 
      where : {
        id: parseInt(id)
      }
    })
    .finally(()=>response.json({msg: "deleted"}))    
  }
  
  async getDevicesCategories(request, response) {

    const allDevicesCategories = await prisma.deviceCategories.findMany();

    response.json(allDevicesCategories);
  }

  async createDeviceCategory(request, response) {

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

module.exports = { 
  DeviceService
}
