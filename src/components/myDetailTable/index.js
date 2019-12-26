import React, { Component } from 'react'
import { Accordion, Card, Col, Container,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

class detailTable extends Component{

    constructor(){
        super();

        this.state = {
        }
      }
    render(){
        const {data} = this.props
        console.log(data.name);
        
        const {name, manufacturer, cost} = data
    return(
        <Container>
              <Row className="justify-content-md-center">
        <Col md={6}>
        <Accordion>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="0">
                Name
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="0">
                <Card.Body>{name}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="1">
                Model
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="1">
                <Card.Body>{manufacturer}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                Manufacturer
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>{cost}</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            </Col>
            </Row>

            </Container>
    )
    }    
}
 export default detailTable;