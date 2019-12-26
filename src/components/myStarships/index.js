import React from 'react';
import TableList from './tableList'
import { Row, Col, Container } from 'react-bootstrap';
import './styles.css'

const myStarShips = ({dataShip, onSelectedStarShip}) => {
        
    const handleOnButtonClick = index =>{
        console.log("handleOnButtonClick pressed");
        onSelectedStarShip(index)
     }
    const strToComponents = dataArray =>(   
        dataArray.map( (title, i) =>
         (
               <Col md={3} className='borderStarshipButton'><TableList data = {title} onButtonClick = {() => handleOnButtonClick(title._id)}></TableList> </Col>
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

export default myStarShips;