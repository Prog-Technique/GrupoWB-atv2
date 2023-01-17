import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Component } from 'react';

import Home from './pages/home';
import FormularioCadastroCliente from './pages/formularioCadastroCliente';
import FormularioCadastroPS from './pages/formularioCadastroPs';
import { Clientes } from './pages/Dados/cliente';
import { Produtos } from './pages/Dados/produto';
import { Servicos } from './pages/Dados/servico';
import { Listagens } from './pages/listagens';
import { EditarCliente } from './pages/Editar/clientes';
import { EditarServico } from './pages/Editar/servicos';
import { EditarProduto } from './pages/Editar/produtos';
import { VisualizarCliente } from './pages/clientesVer';
import { AddProduto } from './pages/Adicionar/clientesVprodutos';
import { AddServico } from './pages/Adicionar/clientesVservicos';


export default class  RoutesApp extends Component {
    render(){

        return (
            <Router>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    
                    <Route path='/cadastrar_cliente' element={<FormularioCadastroCliente/>}/>
                    <Route path='/cadastrar_produto_e_servico' element={<FormularioCadastroPS/>}/>

                    <Route path='/clientes' element={<Clientes/>}/>
                    <Route path='/produtos' element={<Produtos/>}/>
                    <Route path='/servicos' element={<Servicos/>}/>
                    <Route path='/listagens' element={<Listagens/>}/>                   
                    
                    <Route path='/editar_cliente/1' element={<EditarCliente/>}/>
                    <Route path='/editar_produto/1' element={<EditarProduto/>}/>
                    <Route path='/editar_servico/1' element={<EditarServico/>}/>
                    
                    <Route path='/clientes/1' element={<VisualizarCliente/>}/>

                    <Route path='/adicionar_produto/1' element={<AddProduto/>}/>
                    <Route path='/adicionar_servico/1' element={<AddServico/>}/>
                </Routes>
            </Router>
        );
    }
}