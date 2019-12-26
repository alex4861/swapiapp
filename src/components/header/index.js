import React, {Component} from 'react';
import Logo from './logo.png'
import {Row, Col} from'react-bootstrap'      
import 'bootstrap/dist/css/bootstrap.min.css';

 class header extends Component{
      render(){
          return(<Col md={12}> 
          <Row>
              <Col md={2}>
                <img src={Logo} alt ={"logo"} width={'150px'}></img>
              </Col>
              <Col>
                <span className="title-span"> Swappi App</span>
              </Col>
          </Row>
        </Col>)
      }
 }

 export default header