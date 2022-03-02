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
  const [nombre, setNombre] = useState(null);
  const [cantidad, setCantidad] = useState(null);
  const [valor, setValor] = useState(null);
  const [tipo_producto_select, setTipoProductoSelect] = useState(null);
  const [tipo_producto, setTipoProducto] = useState([]);

 
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
        nombre,
        cantidad,
        valor,
        tipo_producto: tipo_producto_select
      };
      const { data } = await instance.post(`/productos`, { data: obj });
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const getTipoProductos = async () => {
    try {
      const { data } = await instance.get(
        `/tipo-productos?filters[$and][0][estado][$eq]=true`
      );
      setTipoProducto(data.data);
      console.log(data.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTipoProductos();
  }, []);


  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Crear producto</h4>
          <p className="card-description"> </p>
          <Form
            className="forms-sample"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <label htmlFor="exampleSelectProducto">Tipo producto</label>
              <select
                value={tipo_producto_select}
                onChange={(e) => setTipoProductoSelect(e.target.value)}
                className="form-control"
                id="producto"
              >
                {tipo_producto.map((option) => (
                  <option value={option.id}>{option.attributes.nombre}</option>
                ))}
              </select>
              <Form.Control.Feedback type="invalid">
                Falta ingresar informacion
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputName1">Nombre</label>
              <Form.Control
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Nombre producto"
                value={nombre}
                required
                onChange={(e) => setNombre(e.target.value)}
              />
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
              to={`/productos`}
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
