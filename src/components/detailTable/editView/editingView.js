import React, { Component } from 'react'
import './styles.css'
import {Row, Form} from'react-bootstrap'      
import 'bootstrap/dist/css/bootstrap.min.css';

class editingView extends Component{
    handleSubmit = (event) =>{
        event.preventDefault();
        if(this.state){
            if (this.state.name === "" || this.state.manufacturer=== "" || this.state.cost ==="") {
                alert("complete the fields to continue")

                
            }
            else{
                const bodyPost = this.state
                fetch("http://localhost:1234/saveStarship", {method:'POST', body:JSON.stringify(bodyPost), headers: { 'content-type': 'application/json'}})
                .then(response =>{
                    return response.json();
                }).then(data =>{alert("los datos se han guardado de forma correcta")
                }).catch(error =>{
                    console.error(error);
                    
                })
            }
        }
        else{
            alert("You must make changes to continue")
        }
    }

    submit = () =>{

    }

     handleChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    render(){
        const {data} = this.props
        return(
            <div>
                <Row>
                    <button className='buttonSave' onClick={(e) => this.handleSubmit(e)}>Save in my starships</button>
                </Row>
                <form>
                    <Row>
                        <label className="label">Starship name</label>
                    </Row>
                    <Row>
                        <Form.Control name='name' type='text' defaultValue={data.name} onChange={e => this.handleChange(e)}></Form.Control>
                    </Row>
                    <Row>
                        <label className="label">Manufacurer</label>
                    </Row>
                    <Row>
                        <Form.Control name='manufacturer' type='text' defaultValue={data.manufacturer} onChange={e => this.handleChange(e)}></Form.Control>
                    </Row>
                    <Row>
                        <label className="label">Cost in credits</label>
                    </Row>
                    <Row>
                        <Form.Control name='cost' type='text' defaultValue={data.cost} onChange={e => this.handleChange(e)}></Form.Control>
                    </Row>
                </form>
            </div>
        )
    }
}

export default editingView;