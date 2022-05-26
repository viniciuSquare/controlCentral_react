const { BsPencilSquare, BsTrash2Fill } = require("react-icons/bs");
const { default: api } = require("../../../api/api");
const { DetailsContainer } = require("../../Base/styled");

export const DeviceDetails = ({ device }) => {
  console.log(device);

  const deleteDevice = async () => {
    await api.put(`devices/${device.id}`);
  };

  return (
    <>
      <h1 className="field-title">Detalhes da selação</h1>
      <DetailsContainer>
        {device.id ? (
          <>
            <div id="data-details">
              <div className="head">
                <div className="title">
                  <p>Nome</p>
                  <h3>{device.alias}</h3>
                </div>

                <div className="tools">
                  <button>
                    <BsPencilSquare size="32" />
                  </button>
                  <button onClick={deleteDevice}>
                    <BsTrash2Fill size="32" />
                  </button>
                </div>
              </div>
              <table>
                <tbody>
                  <tr>
                    <td className="align-left">
                      <h4>Usuário</h4>
                    </td>
                    <td className="align-left">
                      <p>{device.UserDevice[0]?.user?.name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-left">
                      <h4>Endereço IP</h4>
                    </td>
                    <td className="align-left">
                      <p>
                        {device.ipCable || device.ipWireless || "Não definido"}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-left">
                      <h4>Tipo dispositivo</h4>
                    </td>
                    <td className="align-left">
                      <p>{device.category?.title || "Não definido"}</p>
                    </td>
                  </tr>
                  <tr>
                    <td className="align-left">
                      <h4>Local/Setor</h4>
                    </td>
                    <td className="align-left">
                      <p>{device.UserDevice[0]?.location?.title}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
              {/* <tbody>
                  <tr>
                      <td className="align-left" >
                        Estado
                      </td>
                      <td className="align-left" >
                        <p>{device.state||"Não definido"}</p>
                      </td>
                    </tr>
                    
                    <tr>
                      <td className="align-left" >
                        <h2>Categoria Operacional</h2>
                      </td>
                      <td className="align-left" >
                        <p>{device.operationalCategory?.title||"Não definido"}</p>
                      </td>
                    </tr>
                  </tbody> */}
            </div>
          </>
        ) : (
          <h1 className="field-title warning">
            Selecione item para ver detalhes
          </h1>
        )}
      </DetailsContainer>
    </>
  );
};
