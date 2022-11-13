/* eslint-disable react/jsx-pascal-case */
import { Component } from 'react';
import { Button, Card } from 'react-bootstrap';
import Header from "../../component/header";

export class VisualizarProduto extends Component {
    render(){

        return(
            <><Header />
            <main>
                <h1>Visualizar Produto: "Shampoo Match"</h1>
                <Button variant="outline-dark" href='/produtos'>Voltar</Button>
                <Card
                bg="white"
                text="dark"
                style={{ width: '18rem' }}
                className="mb-2"
                >
                    <Card.Header>ID: 1</Card.Header>
                    <Card.Body>
                        <Card.Title>Shampoo Match</Card.Title>
                        <Card.Text>
                            Preço: R$15
                        </Card.Text>
                    </Card.Body>
                </Card>
            </main>
            </>
        );
    }
}