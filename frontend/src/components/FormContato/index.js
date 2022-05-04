import React, { useState, useEffect } from 'react';
import { Container, FormGroup, Label, Col, Alert, Button, Form, Row, Spinner} from 'reactstrap';
import { useForm } from 'react-hook-form';
import { yupResolver } from "@hookform/resolvers/yup"
import * as yup from 'yup';
import api from '../../api';
import { useParams, useNavigate } from 'react-router-dom';
import { formataDataEdit } from './../../util';

function FormContato(){

const [modoEdicao, setModoEdicao] = useState(false);
const [contato, setContato] = useState({});
const [loading, setLoading] = useState(false);

const schema = yup.object().shape({
  nomeCompleto: yup.string().min(2, 'Minimo 2 caracteres').required('Obrigatório'),
  dataNascimento: yup.string().required(),
  telefone1: yup.number().typeError("Obrigatório pelo menos 1 telefone").required(),
  cep: yup.string().required().typeError('age must be a number')
});

const navigate = useNavigate();
const {id} = useParams();
const {register, handleSubmit, setValue, setFocus, formState: {errors}} = useForm({
  resolver: yupResolver(schema),
});

const carregaContato = async () => {
  await api.get(`Contatos/${id}`).then(res=>{
      setContato(res.data)
     
  }).catch(error =>
      {
          console.log(error)
      })
      
    }

useEffect(() => {
  if(id){
  setModoEdicao(true);
  carregaContato();
        let contatoAtual = contato;
      setValue('nomeCompleto', contatoAtual.nomeCompleto)
    //  setValue('dataNascimento', formataDataEdit(contatoAtual.dataNascimento));
       setValue('cep', contatoAtual.cep)
       setValue('ruaAvenida', contatoAtual.ruaAvenida);
       setValue('complemento', contatoAtual.complemento);
       setValue('bairro', contatoAtual.bairro);
       setValue('cidade', contatoAtual.cidade);
       setValue('estado', contatoAtual.estado);
       setValue('numero', contatoAtual.numero);
       setValue('telefone1', contatoAtual.telefone1)
       setValue('telefone2', contatoAtual.telefone2)
       setValue('email', contatoAtual.email);
  }
},[id, contato]);




const novoContato = async (contato) =>
{
  if(modoEdicao === false){
    await api.post("Contatos", contato)
    .then(res=>{
      console.log(res)
      navigate("/Contatos");
    })
  }
  else if(modoEdicao === true){
    await api.put(`Contatos/${id}`, contato)
    .then(res=>{
      console.log(res)
    })
  }

}

const buscaCEP = (e) =>{
  e.preventDefault();
  setLoading(true);
  const cepDigitado = e.target.value;

    fetch(`http://localhost:5959/api/Correios/${cepDigitado}`)
      .then( res => res.json()).then(data =>{
        console.log(data) 
        setValue('ruaAvenida', data.descricao);
        setValue('bairro', data.bairro);
        setValue('cidade', data.cidade);
        setValue('estado', data.estadoUF);
        setFocus('numero');
        setLoading(false);
        }
       
      );
      
  }
      return(
        <Container>
            <h5 className='text-center' style={{marginBottom:"30px"}}>{!modoEdicao ?  "Cadastrar contato" : "Edição de Contato"}</h5>
        <Form onSubmit={handleSubmit(novoContato)}>
         <Row>

    <Col md={6}>
      <FormGroup>
        <Label for="nomeCompleto">
          Nome Completo
        </Label>
        <input
          {...register("nomeCompleto")}
          type="text"   
          className='form-control'
          name="nomeCompleto"
        />
       <span> {errors.nomeCompleto?.message}</span>
      </FormGroup>
    </Col>
    <Col md={6}>
      <FormGroup>
        <Label for="dataNascimento">
          Data de Nascimento
        </Label>
        <input
          type="date"
          {...register("dataNascimento")}
         // value={dataNascimento}
          className='form-control'
          required pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
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
    <input
      {...register("cep")} 
      onBlur={buscaCEP}
      className='form-control'
    />
    {loading &&
    
<Spinner>
  Loading...
</Spinner>

    }
    </FormGroup>
    </Col>
    <Col md={4}>
  <FormGroup>
    <Label for="RuaAvenida">
      Rua/Avenida
    </Label>
    <input
      {...register("ruaAvenida")}
      type="text"
      className='form-control'
     // value={endereco}
    />
  </FormGroup>
      </Col>
      <Col md={2}>
      <FormGroup>
    <Label for="numero">
      Número
    </Label>
    <input
     type="number"
     {...register("numero")}
    // value={numero}
     className='form-control'
    />
  </FormGroup>
      </Col>
      <Col md={2}>
      <FormGroup>
    <Label for="complemento">
      Complemento
    </Label>
    <input
      type='text'
      {...register("complemento")}
     // value={complemento}
      className='form-control'
    />
  </FormGroup>
      </Col>
      
  </Row>
 
  <Row>
    <Col md={4}>
    <FormGroup>
    <Label for="bairro">
     Bairro
    </Label>
    <input
      type='text'
      {...register("bairro")}
     // value={bairro}
      className='form-control'
    />
  </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="cidade">
          Cidade
        </Label>
        <input
          type='text'
          {...register("cidade")}
         // value={cidade}
          className='form-control'
        />
      </FormGroup>
    </Col>
    <Col md={4}>
      <FormGroup>
        <Label for="estado">
          Estado
        </Label>
        <input
          {...register("estado")}
         // value={estado}
          className='form-control'
        />
      </FormGroup>
    </Col>
  </Row>
  <Row>
  <Col md={4}>
    <FormGroup>
        <Label for="email">
          E-mail
        </Label>
        <input
          type='email'
          {...register("email")}
           //value={email}
           className='form-control'
           required
        />
      
      </FormGroup>
      </Col>
    <Col md={2}>
    <FormGroup>
        <Label for="telefone1">
          Telefone 1:
        </Label>
        <input
          type='number'
          {...register("telefone1")}
          // value={telefone_1}
           className='form-control'
        />
         <span> {errors.telefone1?.message}</span>
      </FormGroup>
      </Col>
      <Col md={2}>
      <FormGroup>
        <Label for="telefone2">
          Telefone 2
        </Label>
        <input
         type="number"
         {...register("telefone2")}
        // value={telefone_2}
         className='form-control'
        />
      </FormGroup>
      </Col>
  </Row>
  <Button color='primary' type='submit'>
  {!modoEdicao ? "Cadastrar" : "Editar"}
  </Button>
</Form>
</Container>



    );

}

export default FormContato;