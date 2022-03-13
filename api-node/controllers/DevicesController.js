const { DeviceService } = require('../services/DevicesServices');

const devicesRouter = require('express').Router();

devicesRouter.get('/',  new DeviceService().getDevices);
devicesRouter.get('/:id', new DeviceService().getDevice);

devicesRouter.post('/', new DeviceService().createDevice);

devicesRouter.put('/',  new DeviceService().editDevice);
devicesRouter.put('/:id',  new DeviceService().deleteDevice);

devicesRouter.post('/categoria', new DeviceService().createDeviceCategory);
devicesRouter.get('/categorias', new DeviceService().getDevicesCategories);


module.exports = devicesRouter;