import React, { useState } from 'react'
import { Container, Row, Col, Card, Button, Accordion } from 'react-bootstrap';
import Navbar from './nabvar';

const Prueba = ({ pruebas: pruebas }) => {
    const [open, setOpen] = useState(false);
    return (
        <div>
            <Navbar></Navbar>
            <center><h1>Categories</h1></center>
            <Container>
                <Row>
                    {pruebas.map((prueba) => (
                        <Col xs={12} sm={6} md={4} lg={3} className="mb-3">
                            <Card>
                                <Card.Img variant="top" src={prueba.strCategoryThumb} />
                                <Card.Body style={{ textAlign: 'center' }}>
                                    <Card.Title>{prueba.strCategory}</Card.Title>
                                    <Accordion>
                                                <Accordion.Toggle as={Button} eventKey="0">
                                                    Description
                                              </Accordion.Toggle>
                                            <Accordion.Collapse eventKey="0">
                                                <Card.Body>{prueba.strCategoryDescription}</Card.Body>
                                            </Accordion.Collapse>
                                    </Accordion>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    )
};

export default Prueba