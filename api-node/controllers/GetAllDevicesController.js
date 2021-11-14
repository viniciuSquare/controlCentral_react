export class GetAllDevicesController {
  async handle(request, response) {

    const getAllDevicesService = new GetAllDevicesService();

    const devices = await getAllDevicesService.execute();

    return response.json(devices);

  }
}