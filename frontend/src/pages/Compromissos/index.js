import React, {useState} from 'react';
import {Container, Row, Col, Input, FormGroup, Form, Label, Button} from 'reactstrap';
import { useNavigate } from 'react-router-dom';
import api from '../../api';

const initialState = {
    dataCompromisso: "",
    horario: "",
    titulo: "",
    descricao: ""
  }

function Compromissos(){
const [formValue, setFormValue] = useState(initialState);
const {dataCompromisso, horario, titulo, descricao } = formValue;
const navigate = useNavigate();


const novoCompromisso = async() =>{
  await api.post("Compromissos", formValue)
  .then(res=>{
    console.log(res)
    console.log(res.status)
  })
  setTimeout(() => {
    navigate("/");
}, 500);
}

const onInputChange = (e) =>{
    let {name, value} = e.target;

    setFormValue({...formValue, [name]: value});
  }

const handleSubmit = (e)=>{
    e.preventDefault();
    novoCompromisso();
}
return(
    <Container>
        <h3 className='text-center' style={{marginTop:"20px"}}>Adicionar Compromisso</h3>
    <Form onSubmit={handleSubmit} style={{marginLeft:"35%", marginTop:"28px"}}>
    <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="dataCompromisso">
          Data
        </Label>
        <Input
          type="date"
          name="dataCompromisso"
          onChange={onInputChange}
          value={dataCompromisso}
        />
      </FormGroup>
    </Col>
    </Row>
    <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="Horário">
          Horario
        </Label>
        <Input
          type="time"
          name="horario"
          onChange={onInputChange}
          value={horario}
        />
      </FormGroup>
    </Col>
    </Row>
    <Row>
      <Col md={6}>
        <FormGroup>
          <Label for="Titulo">
            Título
          </Label>
          <Input
            id="titulo"
            name="titulo"
            value={titulo} 
            type="text"
            onChange={onInputChange}
            required={true}
          />
        </FormGroup>
      </Col>
    </Row>
    <Row>
      <Col md={6}>
        <FormGroup>
          <Label for="Descricao">
          Descrição:
          </Label>
          <textarea
            id="descricao"
            name="descricao"
            value={descricao} 
            type="text"
            multiline={true}
            onChange={onInputChange}
            required={true}
            className="form-control"
          />
        </FormGroup>
      </Col>
    </Row>
    <Button color='primary' type='submit'>Cadastrar</Button>
    </Form>
    </Container>




);
}
export default Compromissos;