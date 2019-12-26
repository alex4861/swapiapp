import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'

 class TableList extends Component{
     render(){
        const {data, onButtonClick} = this.props
        const {name} = data
        return(
                    <button className='starShipButton' onClick={onButtonClick}>{name}</button>
        )
     }
     
 }

export default TableList;