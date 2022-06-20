import React, { Component } from 'react';
import './Contact.css';
import Popup from 'reactjs-popup';
import './Popup.css';
import 'reactjs-popup/dist/index.css';

export default class Contact extends Component {
    constructor(){
        super();

        //initialState
        this.state = {
            name: '',
            email: '',
            phone: '',
            message: '',
            popUp: false,
            errors: {
                name: false,
                last: false
            }
        };
    }

    handleOnChange = e => {
        const {target: {value,name}} = e;
        
        this.setState({
            [name]: value
        })
        console.log(value) 
    }

    
    handleOnSubmit = e => {
        e.preventDefault();
        const{name} = this.state;
        this.setState({
            
        })

        this.setState({
            errors:{
                name: name.trim() === '',
            }
        })

        if(name.trim()){

            this.setState({
                popUp: true
            })
        }
    }
    closeModal = () => this.setState({popUp: false});
  render() {
    return (
      <div className="circle">
      <Popup open={this.state.popUp} >
        <div className="modal">
        <button className="close" onClick={this.closeModal} >
          &times;
        </button>
            <div className="header"> Datos </div>
            <p><strong>Nombre: </strong> {this.state.name}</p>
            {this.state.phone && <p><strong>Telefono: </strong> {this.state.phone}</p>}
            <p><strong>Email: </strong> {this.state.email}</p>
            <p><strong>Mensaje: </strong> {this.state.message}</p>
            <div className= "button">
            <button onClick={this.closeModal}>Close</button>
            </div>
        </div>
      </Popup>
        <div className = "carta">
            <h2>Contacto</h2><br></br>
            <form onSubmit={this.handleOnSubmit}>
                <div>
                <label>
                    Nombre: 
                <br></br>
                    <input 
                        type="text" 
                        name="name" 
                        value = {this.state.name}
                        onChange={this.handleOnChange}
                        className={
                            this.state.errors.name ? 'error': ''
                        }
                        />
                </label>
                    {
                        this.state.errors.name
                        && 
                        <div className= 'errorMessage'>Required</div>
                    } 
                <label>
                <br></br>
                    Telefono: 
                <br></br>
                    <input 
                        type="tel" 
                        name="phone" 
                        placeholder="123-456-6789" 
                        value = {this.state.phone}
                        onChange={this.handleOnChange}
                        />
                </label>
                <label>
                <br></br>
                    Email: 
                <br></br>
                    <input 
                        type="email" 
                        placeholder="email@gmail.com" 
                        name="email" 
                        value = {this.state.email}
                        onChange={this.handleOnChange}
                        required
                    />
                </label>
                
                <label>
                <br></br>
                    Message:
                <br></br>
                    <input 
                        type="text" 
                        name="message" 
                        value = {this.state.message}
                        onChange={this.handleOnChange}
                        className={
                            this.state.errors.last ? 'error': ''
                        }
                    />
                </label>
                    {
                        this.state.errors.message
                        && 
                        <div className= 'errorMessage'>Required</div>
                    } 

                <br></br>
                <input type="submit" value="Submit"/>
                </div>
            </form>
        </div>
          
      </div>
    )
  }
}
