import React, { Component, useState,useEffect,useCallback } from "react";
import { Form } from "react-bootstrap";
import axios from "axios";
import { AXIOS_CONF_PUBLIC } from "../../constants/api";
const instance = axios.create(AXIOS_CONF_PUBLIC);

const Edit = (props) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [validated, setValidated] = useState(false);
  const [cliente, setCliente] = useState(null);
  const [nro_documento, setNro_documento] = useState(null);
  const [primer_nombre, setPrimer_nombre] = useState("");
  const [segundo_nombre, setSegundo_nombre] = useState(null);
  const [primer_apellido, setPrimer_apellido] = useState(null);
  const [segundo_apellido, setSegundo_apellido] = useState(null);
  const [correo, setCorreo] = useState(null);
  const [telefono, setTelefono] = useState(null);
  const [fecha_nacimiento, setFecha_nacimiento] = useState(null);
  const [direccion, setDireccion] = useState(null);
  const { id } = props.match.params;

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form)
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const getData = useCallback(async () => {
    try {
      let _cliente = await instance.get(`/clientes/${id}`);
      _cliente = _cliente.data.data.attributes;
        setCliente(_cliente);
      setNro_documento(_cliente.nro_documento);
      setPrimer_nombre(_cliente.primer_nombre);
      setPrimer_apellido(_cliente.primer_apellido);
      setCorreo(_cliente.email);
    } catch (error) {
      console.log(error);
    }
  }, [id]);

  useEffect(() => {
    getData();
  }, [id, getData]);



  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Editar cliente</h4>
          <p className="card-description"> </p>
          <Form  className="forms-sample" noValidate validated={validated} onSubmit={handleSubmit}>
          <Form.Group>
              <label htmlFor="exampleSelectGender">Tipo de documento</label>
              <select className="form-control" id="tipo_documento" >
                <option>Cedula de ciudadania</option>
                <option>Tarjta de identidad</option>
                <option>Otro</option>
              </select>
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputName1">Numero de documento</label>
              <Form.Control
              required
                type="number"
                className="form-control"
                id="nro_documento"
                value={nro_documento}
                onChange={setNro_documento}
                placeholder="Numero de documento"
              />
              <Form.Control.Feedback type="invalid">
              Falta ingresar informacion
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputName1">Primer nombre</label>
              <Form.Control
                type="text"
                className="form-control"
                id="primer_nombre"
                placeholder="Primer nombre"
                value={primer_nombre}
                onChange={setPrimer_nombre}
                required
              />
               <Form.Control.Feedback type="invalid">
              Falta ingresar informacion
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputName1">Segundo nombre</label>
              <Form.Control
                type="text"
                className="form-control"
                id="segundo_nombre"
                placeholder="Segundo nombre"
              />
            </Form.Group>{" "}
            <Form.Group>
              <label htmlFor="exampleInputName1">Primer apellido</label>
              <Form.Control
                type="text"
                className="form-control"
                id="primer_apellido"
                placeholder="Primer apellido"
                required
              />
               <Form.Control.Feedback type="invalid">
              Falta ingresar informacion
            </Form.Control.Feedback>
            </Form.Group>{" "}
            <Form.Group>
              <label htmlFor="exampleInputName1">Segundo apellido</label>
              <Form.Control
                type="text"
                className="form-control"
                id="segundo_apellido"
                placeholder="Segundo apellido"
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputEmail3">Correo</label>
              <Form.Control
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                required
              />
               <Form.Control.Feedback type="invalid">
              Falta ingresar informacion
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleSelectGender">Genero</label>
              <select className="form-control" id="genero">
                <option>Masculino</option>
                <option>Femenino</option>
                <option>Otro</option>
              </select>
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputCity1">Direccion</label>
              <Form.Control
                type="text"
                className="form-control"
                id="direccion"
                placeholder="Direccion"
                required
              />
               <Form.Control.Feedback type="invalid">
              Falta ingresar informacion
            </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputCity1">Telefono</label>
              <Form.Control
                type="number"
                className="form-control"
                id="telefono"
                placeholder="Telefono"
                required
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
                  {  selectedFile == null ? "Cargar imagen" : selectedFile.name}
                </label>
              </div>
            </Form.Group>
            <button type="submit" className="btn btn-gradient-primary mr-2">
              Guardar
            </button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
