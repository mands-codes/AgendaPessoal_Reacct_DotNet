import React, { useState, useEffect } from "react";
import {Table, Container, Input, Row, Col, Button, DropdownItem, DropdownMenu, DropdownToggle, Dropdown} from "reactstrap";
import { Link } from "react-router-dom";
import { IoEllipsisVertical } from "react-icons/io5";
import api from "../../api";
function Home(){
    const [compromissos, setCompromissos] = useState([{}]);


    const carregaCompromissos = async () => {
        await api.get("Compromissos")
        .then(res=>{
            setCompromissos(res.data)
        }).catch(error =>
            {
                console.log(error)
            })
    }

useEffect(()=>{
    carregaCompromissos();
},[]);




    const handleDelete = (id) =>{
        if(window.confirm("Você tem certeza que deseja remover esta compromisso?")){
             api.delete(`Compromissos/${id}`).then(res=>
                console.log(res.data));
          //  window.location.reload(); 
        }
      } 

return(
    <Container >
    <h5 className="text-center">Lista de Compromissos</h5>
    <Table borderless>
        <thead>
             <tr>
                <th>Data</th>
                <th>Hora</th>
                <th>Titulo</th>
                <th>Descrição</th>
            </tr>
         </thead>
         <tbody>
             {compromissos && compromissos.map((item, index) => (
             <tr key={index}>
                <td>{item.data}</td>
                <td>{item.hora}</td>
                <td>{item.titulo}</td>
                <td>{item.descricao}</td>
                <td>
                <Dropdown>
                <DropdownToggle
                data-toggle="dropdown"
                tag="span">
                    <IoEllipsisVertical />
                </DropdownToggle>
                <DropdownMenu>
                     <DropdownItem>
                        Info
                     </DropdownItem>
                    <DropdownItem>
                    <Link to={`/editCompromisso/${item.id}`} style={{textDecoration:"none", color:"black"}}>
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
 </Container> 


);
}

export default Home;