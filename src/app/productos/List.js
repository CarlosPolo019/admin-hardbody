import React, { useEffect, useState } from "react";
import axios from "axios";
import { AXIOS_CONF_PUBLIC } from "../../constants/api";
import { Link } from "react-router-dom";

const instance = axios.create(AXIOS_CONF_PUBLIC);

const List = () => {
  const [productos, setProductos] = useState(0);

  const getProductos = async () => {
    try {
      const { data } = await instance.get(
        `/productos?filters[$and][0][estado][$eq]=true`
      );
      setProductos(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Listado productos</h4>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Cantidad</th>
                  <th>Valor</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {productos &&
                  productos.map((producto) => (
                    <tr key={producto.id}>
                      <td>{producto.attributes.nombre}</td>
                      <td>{producto.attributes.cantidad}</td>
                      <td>{producto.attributes.valor}</td>
                      <td>
                        <Link
                          to={`/productos/${producto.id}`}
                          className="btn btn-gradient-primary btn-fw"
                        >
                          Editar
                        </Link>
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
