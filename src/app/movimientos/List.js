import React, { useEffect, useState } from "react";
import axios from "axios";
import { AXIOS_CONF_PUBLIC } from "../../constants/api";
import { Link } from "react-router-dom";

const instance = axios.create(AXIOS_CONF_PUBLIC);

const List = () => {
  const [movimientos, setMovimientos] = useState(0);

  const getMovimientos = async () => {
    try {
      const { data } = await instance.get(
        `/movimientos?populate=*`
      );
      setMovimientos(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getMovimientos();
  }, []);

  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Listado movimientos</h4>
          <div className="table-responsive">
            <table className="table table-hover">
              <thead>
                <tr>
                  <th>Usuario</th>
                  <th>Producto</th>
                  <th>Cantidad</th>
                  <th>Valor</th>
                  <th>Metodo de pago</th>
                  <th>Opciones</th>
                </tr>
              </thead>
              <tbody>
                {movimientos &&
                  movimientos.map((movimiento) => (
                    <tr key={movimiento.id}>
                    <td>{movimiento.attributes.cliente.data.attributes.primer_nombre+" "+movimiento.attributes.cliente.data.attributes.segundo_nombre}</td>
                    <td>{movimiento.attributes.producto.data.attributes.nombre}</td>
                    <td>{movimiento.attributes.cantidad}</td>
                    <td>{movimiento.attributes.producto.data.attributes.valor}</td>
                      <td>{movimiento.attributes.metodo_pago}</td>
                      <td>
                        <Link
                          to={`/movimientos/${movimiento.id}`}
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
