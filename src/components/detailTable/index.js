import React, { Component } from 'react'
import { Accordion, Card, Col, Container,Row } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import EditView from './editView';
import EditingView from './editView/editingView';


class detailTable extends Component{

    setEditableData =() =>{
        const {data} = this.props
        const {name, manufacturer, cost_in_credits} = data
        const dataToSend = {
            name: name,
            manufacturer: manufacturer,
            cost: cost_in_credits
        }
        console.log(dataToSend);
        
        this.setState({editableData: dataToSend,})
    }
    constructor(){
        super();

        this.state = {
        }
      }
    render(){
        const {data} = this.props
        const {editableData} = this.state
        const {name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity, consumables, hyperdrive_rating, MGLT, starship_class} = data
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
                <Card.Body>{model}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="2">
                Manufacturer
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="2">
                <Card.Body>{manufacturer}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="3">
                Cost in credits
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="3">
                <Card.Body>{cost_in_credits}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="4">
                length
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="4">
                <Card.Body>{length}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="5">
                Max atmosphering speed
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="5">
                <Card.Body>{max_atmosphering_speed}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="6">
                crew
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="6">
                <Card.Body>{crew}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="7">
                passengers
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="7">
                <Card.Body>{passengers}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="8">
                Cargo capacity
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="8">
                <Card.Body>{cargo_capacity}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="9">
                    Consumables
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="9">
                <Card.Body>{consumables}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="10">
                Hyperdrive rating
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="10">
                <Card.Body>{hyperdrive_rating}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="11">
                MGLT
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="11">
                <Card.Body>{MGLT}</Card.Body>
                </Accordion.Collapse>
            </Card>
            <Card>
                <Accordion.Toggle as={Card.Header} eventKey="12">
                Starship class
                </Accordion.Toggle>
                <Accordion.Collapse eventKey="12">
                <Card.Body>{starship_class}</Card.Body>
                </Accordion.Collapse>
            </Card>
            </Accordion>
            </Col>
                
            <Col className='p-4'>
                {editableData?             <EditingView data={editableData}/>   :
                <EditView
                enableEditMode = {this.setEditableData}/>


                }
            </Col>
            </Row>

            </Container>
    )
    }    
}
 export default detailTable;