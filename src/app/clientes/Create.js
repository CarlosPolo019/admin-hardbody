import React, { Component, useState } from "react";
import { Form } from "react-bootstrap";
import Feedback from 'react-bootstrap/Feedback'
import { Link } from "react-router-dom";

const Create = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    console.log(form)
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="col-12 grid-margin stretch-card">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title">Crear cliente</h4>
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

export default Create;
