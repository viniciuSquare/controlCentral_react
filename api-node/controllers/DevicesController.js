const { 
  CreateDeviceService, 
  GetDevicesService, 
  CreateDeviceCategoryController, 
  GetDeviceCategories, 
  GetDevice,
  EditDevice
} = require('../services/DevicesServices');

const devicesRouter = require('express').Router();

devicesRouter.post('/', new CreateDeviceService().handle);
devicesRouter.get('/',  new GetDevicesService().handle);
devicesRouter.put('/',  new EditDevice().handle);
devicesRouter.post("/categoria", new CreateDeviceCategoryController().handle);
devicesRouter.get("/categorias", new GetDeviceCategories().handle);
devicesRouter.get("/categoria", new GetDevice().handle);


module.exports = devicesRouter;