import { BsFillPersonLinesFill, BsPencilSquare, BsThreeDots } from "react-icons/bs";
import { useSession } from "../../../hooks/useSession";

export function DeviceListItem({ device, isHeader }) {
  const { handleItemSelection } = useSession();

  if (isHeader) {
    return (
      <tr>
        <th>Tipo</th>
        <th>Hostname</th>
        <th>Usuário</th>
        <th>IP</th>
        <th>ID Inventário</th>
        <th>Model</th>
        <th>Acessos</th>
      </tr>
    );
  } else {
    return (
      <tr>
        <td>{device.category?.title}</td>
        <td>{device.hostname}</td>
        <td>{device.user?.name}</td>{" "}
        {/* ATTENTION AS API SERVICE DOES NOT DELIVEY THIS WAY YET */}
        <td>{device.ipCable || device.ipWireless || "Não definido"}</td>
        <td>{device.inventoryID}</td>
        <td>{device.model}</td>
        <td>
          <div className="data-tools">
            <button>
              <BsFillPersonLinesFill size="24" />
            </button>
            <button onClick={() => handleItemSelection(device, "edit")}>
              <BsPencilSquare size="24" />
            </button>
            <button onClick={() => handleItemSelection(device)}>
              <BsThreeDots size="24" />
            </button>
          </div>
        </td>
      </tr>
    );
  }
}
