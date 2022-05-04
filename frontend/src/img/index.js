import React, { useState, useEffect } from 'react';
import { Container, FormGroup, Label, Col, Input, Button, Form, Row} from 'reactstrap';
import { api } from '../../api';

function FormContato(){
    const[cepInformado, setCepInformado] = useState("");



const handleInput = (e) =>{
  setCepInformado(e.target.value)
  console.log(e.target.value);
  //buscaCEP(e.target.value);
}

const buscaCEP = () =>{
        api.get(`/Correios/${cepInformado}`)
        .then(response =>{
          console.log(response.data);
        });
}


    return(
        <Container>
            <h5 className='text-center' style={{marginBottom:"30px"}}>Adicionar novo contato</h5>
        <Form>
         <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="nomeCompleto">
          Nome Completo
        </Label>
        <Input
          id="nomeCompleto"
          name="nomeCompleto"
          placeholder="Digite seu nome completo"
          type="text"
        />
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="dataNascimento">
          Data de Nascimento
        </Label>
        <Input
          id="dataNascimento"
          name="dataNascimento"
          placeholder="password placeholder"
          type="date"
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
      <Col md={2}>
      <FormGroup>
    <Label for="CEP">
      CEP
    </Label>
    <Input
      id="CEP"
      name="CEP"
      onChange={handleInput}
    />
    <button onClick={()=> buscaCEP()}>CEP</button>
    </FormGroup>
    </Col>
    <Col md={4}>
  <FormGroup>
    <Label for="endereco">
      Endereço
    </Label>
    <Input
      id="endereco"
      name="endereco"
      placeholder="Apartment, studio, or floor"
    />
  </FormGroup>
      </Col>
      <Col md={2}>
      <FormGroup>
    <Label for="numero">
      Número
    </Label>
    <Input
      id="numero"
      name="numero"
      placeholder="410"
      type='number'
    />
  </FormGroup>
      </Col>
      <Col md={2}>
      <FormGroup>
    <Label for="complemento">
      Complemento
    </Label>
    <Input
      id="complemento"
      name="complemento"
      placeholder="AP 202"
      type='text'
    />
  </FormGroup>
      </Col>
      
  </Row>
 
  <Row>
    <Col md={6}>
      <FormGroup>
        <Label for="exampleCity">
          City
        </Label>
        <Input
          id="exampleCity"
          name="city"
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="exampleState">
          State
        </Label>
        <Input
          id="exampleState"
          name="state"
        />
      </FormGroup>
    </Col>
    <Col md={2}>
      <FormGroup>
        <Label for="exampleZip">
          Zip
        </Label>
        <Input
          id="exampleZip"
          name="zip"
        />
      </FormGroup>
    </Col>
  </Row>
  <Button color='primary'>
    Cadastrar
  </Button>
</Form>
</Container>



    );
}

export default FormContato;