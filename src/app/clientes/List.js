import React, { useEffect, useState } from "react";
import axios from "axios";
import { AXIOS_CONF_PUBLIC } from "../../constants/api";
import { Link } from "react-router-dom";

import moment from "moment";
const instance = axios.create(AXIOS_CONF_PUBLIC);

const List = () => {
  const [clientes, setClientes] = useState(0);

  const getBases = async () => {
    try {
      const { data } = await instance.get(`/clientes`);
      setClientes(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };



  useEffect(() => {
    getBases();
  }, []);

  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Listado clientes</h4>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Telefono</th>
                  <th>Correo</th>
                  <th>Fecha de nacimiento</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {clientes &&
                  clientes.map((cliente) => (
                    <tr key={cliente.id}>
                      <td>{cliente.attributes.primer_nombre}</td>
                      <td>{cliente.attributes.telefono}</td>
                      <td>{cliente.attributes.correo}</td>
                      <td>
                        {moment(
                          cliente.attributes.fecha_nacimiento,
                          "Y-MM-DD"
                        ).format("DD/MM/Y")}
                      </td>
                      <td>

                      <Link to={`/cliente/${cliente.id}`} className="btn btn-gradient-primary btn-fw">Editar</Link>

                      </td>
                    </tr>
                  ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default List;
