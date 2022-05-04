import React, { useState, useEffect } from 'react';
import { Container, 
        Row, 
        Col, 
        Input, 
        Button,
         Table, 
         Dropdown, 
        DropdownToggle, 
        DropdownMenu, 
        DropdownItem
         } from 'reactstrap';
import { SiAddthis } from "react-icons/si";
import {RiUserSearchLine} from "react-icons/ri";
import { Link } from 'react-router-dom';
import api from '../../api';
import { IoEllipsisVertical } from "react-icons/io5";
import { formataData } from '../../util';

function Contatos(){
    const [contatos, setContatos] = useState([]);
    const [busca, setBusca] = useState('');
    const [mostrarInfo, setMostrarInfo] = useState(false);
    const [dadosSelecionados, setDadosSelecionados] = useState();
    const [infoContato, setInfoContato] =useState();
const carregaContatos = async () => {
    await api.get("Contatos")
    .then(res=>{
        setContatos(res.data)
    }).catch(error =>
        {
            console.log(error)
        })
}
    useEffect(()=>{
        carregaContatos();
    },[]);

const lowerBusca =  busca.toLowerCase();

const pesquisaContato = () =>{
    console.log(lowerBusca);
 const contatoFiltrado = contatos.filter((contato)=> contato.nomeCompleto.toLowerCase().includes(lowerBusca));
setContatos(contatoFiltrado);
}
const mostraDados = (id) => {
  const contatoFiltrado = contatos.find((contato)=> contato.id == id);
  setInfoContato(contatoFiltrado);
    console.log(infoContato)

    setMostrarInfo(true)
}
const handleDelete = (id) =>{
        if(window.confirm("Você tem certeza que deseja remover esta contato?")){
             api.delete("Contatos/" + id).then(res=>
                console.log(res.data));
            window.location.reload(); 
        }
      } 
return(
        <Container >
            <Row className="justify-content-center" style={{marginTop:"50px", marginLeft:"170px"}}>
            <Col md={4}>
                <Input placeholder="Pesquisar contatos" type="text" value={busca} onChange={(e)=>{setBusca(e.target.value)}} style={{height:"30px;"}}/>
                
            </Col>
            <Col md={4}>
                <Button color='primary' style={{marginRight:"9px"}}><RiUserSearchLine size={25} onClick={pesquisaContato}/></Button>
               <Link to="/adicionarContato">
                    <Button color='primary'><SiAddthis size={25}/></Button> 
                </Link>    
            </Col>
            </Row>
            
            <Table borderless>
                <thead>
                     <tr>
                        <th>Nome Completo</th>
                        <th>Telefone</th>
                        <th>Email</th>
                        <th>Data Nascimento</th>
                    </tr>
                 </thead>
                 <tbody>
                     {contatos && contatos.map((item, index) => (
                     <tr key={index}>
                        <td>{item.nomeCompleto}</td>
                        <td>{item.telefone1}</td>
                        <td>{item.email}</td>
                        <td>{formataData(item.dataNascimento)}</td>
                        <td>
                        <Dropdown>
                        <DropdownToggle
                        data-toggle="dropdown"
                        tag="span">
                            <IoEllipsisVertical />
                        </DropdownToggle>
                        <DropdownMenu>
                             <DropdownItem>
                             <Button outline color='none' onClick={()=> mostraDados(item.id)}>
                                Info
                                </Button>
                             </DropdownItem>
                            <DropdownItem>
                            <Link to={`/editContato/${item.id}`} style={{textDecoration:"none", color:"black"}}>
                                Editar
                            </Link>
                            </DropdownItem>
                            <DropdownItem>
                            <Button outline color='none' onClick={()=> handleDelete(item.id)}>
                                Deletar
                                </Button>
                            </DropdownItem>
                         </DropdownMenu>
                        </Dropdown>         
                        </td>
                    </tr>
                     ))}
                 </tbody>
            </Table>
            {mostrarInfo &&
                <Container>
                <strong>Nome:</strong> <p>{infoContato.nomeCompleto}</p>
                <br></br>
                <strong>Data de Nascimento:</strong> <p>{infoContato.dataNascimento}</p>
                <br></br>
                <strong>E-mail:</strong> <p>{infoContato.email}</p>
                <br></br>
                <strong>Telefone 1:</strong> <p>{infoContato.telefone1}</p>
                <br></br>
                <strong>Telefone 2:</strong> <p>{infoContato.telefone2}</p>
                <br></br>
                <strong>Endereço:</strong><p>{infoContato.ruaAvenida}</p>   <strong>Número:</strong> <p>{infoContato.numero}</p>
                <br></br>
                <strong>Complemento:</strong><p>{infoContato.complemento}</p>
                <br></br>
                <strong>Bairro:</strong> {infoContato.bairro} - <strong>CEP:</strong>{infoContato.cep} - <strong>Cidade:</strong> {infoContato.cidade}
                <br></br>
                <strong>Estado:</strong> <p>{infoContato.estado}</p>
                </Container>
            }
            

         </Container> 
    );
}
export default Contatos;