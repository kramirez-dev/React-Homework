import React from 'react'
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import Navbar from './nabvar';

class Random extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    increment = () => {
        this.setState({ count: this.state.count + 1 })
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <Container>
                    <Row>
                        {this.props.pruebas.map((prueba) => (
                            <Col>
                                <center><h1>{prueba.strMeal}</h1></center>
                                <Card className="text-center mb-2">
                                    <Card.Header>{prueba.strCategory}</Card.Header>
                                    <Card.Text>
                                        {prueba.strArea}
                                    </Card.Text>
                                    <Card.Body>
                                        <Card.Img variant="bottom" src={prueba.strMealThumb} style={{ width: '50%' }} />
                                        <Card.Title>Instructions</Card.Title>
                                        <Card.Text>
                                            {prueba.strInstructions}
                                        </Card.Text>
                                        <br />
                                        <Button className="mr-2" variant="primary" href={prueba.strYoutube} target="_blank">Preparation</Button>
                                        <Button variant="success" onClick={this.increment}>
                                              Likes <Badge variant="light">{this.state.count}</Badge>
                                            <span className="sr-only">unread messages</span>
                                        </Button>
                                    </Card.Body>
                                    <Card.Footer className="text-muted">{prueba.strTags}</Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Container>
            </div>
        )
    }
}



export default Random