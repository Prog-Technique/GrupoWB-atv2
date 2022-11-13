/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import Header from "../../component/header";

export class VisualizarCliente extends Component {
    render(){

        return (
            <><Header />
            <main>
                <h1>Visualizar cliente: "Amanda"</h1>
                <Button  variant="outline-dark" href='/clientes'>Voltar</Button>
                <Card
                bg="white"
                text="dark"
                style={{ width: '18rem' }}
                className="mb-2"
                >
                    <Card.Header>ID: 1</Card.Header>
                    <Card.Body>
                        <Card.Title>Amanda</Card.Title>
                        <Card.Text>
                            Nome Social: Dika
                        </Card.Text>
                        <Card.Text>
                            Gênero: Feminino
                        </Card.Text>
                        <Card.Text>
                            CPF: 111.111.11-11
                        </Card.Text>
                        <Card.Text>
                            RG: 11.11.111/1
                        </Card.Text>
                        <Card.Text>
                            Telefone: 12 3911-1111
                        </Card.Text>
                        <Card.Text>
                            Telefone: 12 99211-1111
                        </Card.Text>
                    </Card.Body>
                </Card>
            </main>
            </>
        );
    }
}