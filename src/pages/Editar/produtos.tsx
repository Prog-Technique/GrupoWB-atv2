/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import { Button } from 'react-bootstrap';
import Header from "../../component/header";

export class EditarProduto extends Component {
    render(){

        return (
            <><Header />
            <main>
                <h1>Editar Produto</h1>
                
                <div className="forms">
                <Button className="button" variant="outline-dark" href='/produtos'>Voltar</Button>
                    <form>
                        <div className="field">
                            <label htmlFor="Produto">Produto:</label>
                            <input type="text" defaultValue="Xampoo"/>
                        </div>
                        <div className="field">
                            <label htmlFor="Preco">Preço:</label>
                            <input type="text" defaultValue="15.00"/>
                        </div>
                        <Button className="submit" variant="outline-dark" type='submit'>Editar</Button>{' '}
                    </form>
                </div>
            </main>
            </>
        );
    }
}