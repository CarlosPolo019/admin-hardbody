import React, { Component, useState,useEffect } from "react";
import { Form } from "react-bootstrap";
import Feedback from "react-bootstrap/Feedback";
import { Link } from "react-router-dom";
import axios from "axios";
import { AXIOS_CONF_PUBLIC } from "../../constants/api";
const instance = axios.create(AXIOS_CONF_PUBLIC);

const Create = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [validated, setValidated] = useState(false);
  const [cliente, setCliente] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [valor, setValor] = useState(null);
  const [producto_select, setProductoSelect] = useState([]);
  const [cliente_select, setClienteSelect] = useState([]);
  const [productos, setProductos] = useState([]);

 
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    console.log(form);
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
  };

  const newProducto = async () => {
    try {
      const obj = {
        cliente,
        cantidad,
        valor,
        producto: producto_select
      };
      const { data } = await instance.post(`/productos`, { data: obj });
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getData = async () => {
    try {
      const  data  = await instance.get(
        `/productos?filters[$and][0][estado][$eq]=true`
      );
      const  producto  = await instance.get(
        `/clientes?filters[$and][0][estado][$eq]=true`
      );
      setProductos(producto.data);
      setClienteSelect(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);


  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Crear movimiento</h4>
          <p className="card-description"> </p>
          <Form
            className="forms-sample"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <label htmlFor="exampleSelectProducto">producto</label>
              <select
                value={producto_select}
                onChange={(e) => setProductoSelect(e.target.value)}
                className="form-control"
                id="producto"
              >
                {productos.map((option) => (
                  <option value={option.id}>{option.attributes.nombre}</option>
                ))}
              </select>
              <Form.Control.Feedback type="invalid">
                Falta ingresar informacion
              </Form.Control.Feedback>
            </Form.Group>
       
            <Form.Group>
              <label htmlFor="exampleInputCity1">Cantidad</label>
              <Form.Control
                type="number"
                className="form-control"
                id="cantidad"
                placeholder="Cantidad"
                required
                value={cantidad}
                onChange={(e) => setCantidad(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Falta ingresar informacion
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputCity1">Valor</label>
              <Form.Control
                type="number"
                className="form-control"
                id="cantidad"
                placeholder="Cantidad"
                required
                value={valor}
                onChange={(e) => setValor(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Falta ingresar informacion
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <label>Foto</label>
              <div className="custom-file">
                <Form.Control
                  accept="image/*"
                  type="file"
                  className="form-control visibility-hidden"
                  id="customFileLang"
                  lang="es"
                  onChange={(e) => setSelectedFile(e.target.files[0])}
                />
                <label className="custom-file-label" htmlFor="customFileLang">
                  {selectedFile == null ? "Cargar imagen" : selectedFile.name}
                </label>
              </div>
            </Form.Group>
            <button type="submit" className="btn btn-gradient-primary mr-2">
              Crear
            </button>
            <Link
              to={`/movimientos`}
              className="btn btn-gradient-secondary btn-fw"
            >
              Cancelar
            </Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Create;
