const { PrismaClient } = require('@prisma/client')

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
module.exports = {CreateDeviceController}