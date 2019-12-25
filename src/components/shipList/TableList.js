import React from 'react'
import {Row, Col} from'react-bootstrap'      
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

 const TableList = ({data}) =>{
     const {name} = data
     return(
                 <button className='starShipButton'>{name}</button>
     )
 }

 export default TableList;