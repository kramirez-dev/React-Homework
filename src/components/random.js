import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import Navbar from './nabvar';

const Random = ({ pruebas: pruebas }) => {
    return (
        <div>
            <Navbar></Navbar>
            <Container>
                <Row>
                    {pruebas.map((prueba) => (
                        <Col>
                         <center><h1>{prueba.strMeal}</h1></center>
                        <Card className="text-center">
                            <Card.Header>{prueba.strCategory}</Card.Header>
                            <Card.Text>
                                   {prueba.strArea}
                                </Card.Text>
                            <Card.Body>
                            <Card.Img variant="bottom" src={prueba.strMealThumb} style={{ width: '50%' }}/>
                                <Card.Title>Instructions</Card.Title>
                                <Card.Text>
                                   {prueba.strInstructions}
                                </Card.Text>
                                <br/>
                                <Button href={prueba.strYoutube} target="_blank">Preparation</Button>
                            </Card.Body>
                            <Card.Footer className="text-muted">{prueba.strTags}</Card.Footer>
                        </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
};

export default Random