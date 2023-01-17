/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import Header from "../../component/header";

export class EditarServico extends Component {
    render(){

        return (
            <><Header />
            <main>
                <h1>Editar Serviço</h1>
                <div className="forms">
                <Button className="button" variant="outline-dark" href='/servicos'>Voltar</Button>
                    <form>
                        <div className="field">
                            <label htmlFor="Servico">Serviço:</label>
                            <input type="text" defaultValue="Alongamento de unhas"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" defaultValue="150.00"/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit'>Editar</Button>{' '}
                    </form>
                </div>
            </main>
            </>
        );
    }
}