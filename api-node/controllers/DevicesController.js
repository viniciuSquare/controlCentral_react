const { DeviceService } = require('../services/DevicesServices');

const devicesRouter = require('express').Router();
const devicesCategoryRouter = require('express').Router();

devicesRouter.get('/',  new DeviceService().getDevices);
devicesRouter.get('/:id', new DeviceService().getDevice);

devicesRouter.post('/', new DeviceService().createDevice);

devicesRouter.put('/',  new DeviceService().editDevice);
devicesRouter.put('/:id',  new DeviceService().deleteDevice);

devicesCategoryRouter.post('/', new DeviceService().createDeviceCategory);
devicesCategoryRouter.get('/', new DeviceService().getDevicesCategories);


module.exports = {devicesRouter, devicesCategoryRouter};