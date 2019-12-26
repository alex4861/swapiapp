import React from 'react';
import TableList from './TableList'
import { Row, Col, Container } from 'react-bootstrap';
import './styles.css'

const shipList = ({dataShip, onSelectedStarShip}) => {
        
    const handleOnButtonClick = index =>{
        console.log("handleOnButtonClick pressed");
        onSelectedStarShip(index)
     }
    const strToComponents = dataArray =>(   
        dataArray.map( (title, i) =>
         (
               <Col md={3} className='borderStarshipButton'><TableList data = {title} onButtonClick = {() => handleOnButtonClick(title.url)}></TableList> </Col>
         ))
     )

        
        return(<div>
            <Container>
                <Row>
                    {strToComponents(dataShip)}
                </Row>
            </Container>
            
        </div>)
}

export default shipList;