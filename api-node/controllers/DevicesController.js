const { 
  CreateDeviceService, 
  GetDevicesService, 
  CreateDeviceCategoryController, 
  GetDeviceCategories, 
  GetDevice,
  EditDevice,
  DeviceService
} = require('../services/DevicesServices');

const devicesRouter = require('express').Router();

devicesRouter.post('/', new DeviceService().createDevice);
devicesRouter.get('/',  new DeviceService().getDevices);
devicesRouter.put('/',  new DeviceService().editDevice);
devicesRouter.get("/", new DeviceService().getDevice);

devicesRouter.post("/categoria", new DeviceService().createDeviceCategory);
devicesRouter.get("/categorias", new DeviceService().getDevicesCategories);


module.exports = devicesRouter;