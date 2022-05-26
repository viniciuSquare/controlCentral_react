import { DeviceListItem } from "./DeviceItem";

export const DeviceList = ({ devices }) => {
  return (
    <table id="devices-listage" className="with-td-division">
      <DeviceListItem isHeader />
      <tbody>{devices.length > 0 && devices.map(device=> <DeviceListItem device={device} />)}</tbody>
    </table>
  );
};
