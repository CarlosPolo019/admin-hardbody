import React, { Component, useState, useEffect, useCallback } from "react";
import { Form,Dropdown } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
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
  const [genero, setGenero] = useState(null);
  const [direccion, setDireccion] = useState(null);
  const [estado, setEstado] = useState(null);
  const { id } = props.match.params;

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }else{
      updateCliente(1);
    }
      setValidated(true);
 
  };

  const updateCliente = async (id) => {
    try {
     const obj = {
        nro_documento,
        primer_nombre,
        segundo_nombre,
        primer_apellido,
        telefono,
        correo,
        fecha_nacimiento,
        genero,
        direccion,
        estado
      }
      const { data } = await instance.put(`/clientes/${id}`,{data: obj});
      console.log(data.data);
    } catch (error) {
      console.error(error); 
    }
  };


  const getData = useCallback(async () => {
    try {
      let _cliente = await instance.get(`/clientes/${id}`);
      _cliente = _cliente.data.data.attributes;
      setCliente(_cliente);
      setNro_documento(_cliente.nro_documento);
      setPrimer_nombre(_cliente.primer_nombre);
      setSegundo_nombre(_cliente.segundo_nombre);
      setSegundo_apellido(_cliente.segundo_apellido);
      setPrimer_apellido(_cliente.primer_apellido);
      setTelefono(_cliente.telefono);
      setDireccion(_cliente.direccion);
      setCorreo(_cliente.correo);
      setFecha_nacimiento(_cliente.fecha_nacimiento);
      setGenero(_cliente.genero);
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
          <Form 
            className="forms-sample"
            noValidate
            validated={validated}
            onSubmit={handleSubmit}
          >
            <Form.Group>
              <label htmlFor="exampleInputName1">Numero de documento</label>
              <Form.Control
                required
                type="number"
                className="form-control"
                id="nro_documento"
                value={nro_documento}
                placeholder="Numero de documento"
                onChange={(e) => setNro_documento(e.target.value)}
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
                required
                onChange={(e) => setPrimer_nombre(e.target.value)}
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
                value={segundo_nombre}
                onChange={(e) => setSegundo_nombre(e.target.value)}
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
                value={primer_apellido}
                onChange={(e) => setPrimer_apellido(e.target.value)}
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
                value={segundo_apellido}
                onChange={(e) => setSegundo_apellido(e.target.value)}
              />
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputEmail3">Fecha de nacimiento</label>
              <Form.Control
                type="date"
                className="form-control"
                id="email"
                placeholder="Email"
                required
                value={fecha_nacimiento}
                onChange={(e) => setFecha_nacimiento(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Falta ingresar informacion
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleInputEmail3">Correo</label>
              <Form.Control
                type="email"
                className="form-control"
                id="email"
                placeholder="Email"
                required
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Falta ingresar informacion
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group>
              <label htmlFor="exampleSelectGender">Genero</label>
              <select
                value={genero}
                onChange={(e) => setGenero(e.target.value)}
                className="form-control"
                id="genero"
              >
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
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
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
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
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
            <Form.Group className="row">
                        <label className="col-sm-3 col-form-label">Estado</label>
                        <div className="col-sm-4">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" onChange={() => setEstado(true)} name="ExampleRadio4" id="membershipRadios1" /> Activo 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                        <div className="col-sm-5">
                        <div className="form-check">
                          <label className="form-check-label">
                            <input type="radio" className="form-check-input" onChange={() => setEstado(false)} value={estado}  name="ExampleRadio4" id="membershipRadios2" /> Inactivo 
                            <i className="input-helper"></i>
                          </label>
                        </div>
                        </div>
                      </Form.Group>

            <button type="submit" className="btn btn-gradient-primary mr-2">
              Guardar
            </button>
            <Link to={`/clientes`} className="btn btn-gradient-secondary btn-fw">Cancelar</Link>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Edit;
