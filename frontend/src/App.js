import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Contatos from "./pages/Contatos";
import Compromissos from "./pages/Compromissos";
import FormContato from "./components/FormContato";
function App() {
  return (
  <Router>
    <Menu />
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Home' element={<Home/>}/>
          <Route path='/adicionarCompromissos' element={<Compromissos/>}/>
          <Route path="/contatos" element={<Contatos/>}/>
          <Route path="/adicionarContato" element={<FormContato/>}/>
          <Route path='/editContato/:id' element={<FormContato/>}/>
        </Routes>
  </Router>
  );
}

export default App;
