import React,{useState} from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
export default class SignIn extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            username:'',
            password:''
        }
    }

    usernameListener = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    passwordListener = (event) => {
        this.setState({
            password: event.target.value
        })
    }

     onSubmit = (event) => {
         if (this.state.username == ''){
            console.log("Username harus diisi")
         } else {
             if (this.state.password == ''){
                console.log("Password harus diisi")
             } else {
                console.log("LOGIN PROSES")
             }
         }
        
    }

    render(){
        var label={
            fontWeight:'bold'
        }
        var button = {
            width: '100%',
            marginTop: '15px'
        }
        var labelOr = {
            width: '100%',
            textAlign: 'center'
        }
        return (
            <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                        <Link to="/"><button class="delete is-large" aria-label="close"/></Link>
                    </header>
                    <section class="modal-card-body">
                    <label style={label}>Alamat Email</label>
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" value={this.state.username} onChange={this.usernameListener} type="email" placeholder="Masukkan username Anda" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                                <span class="icon is-small is-right">
                                    <i class="fas fa-check"></i>
                                </span>
                            </p>
                        </div>
    
                        <label style={label}>Kata Sandi</label>
                        <div class="field">
                            <p class="control has-icons-left ">
                                <input class="input" value={this.state.password} onChange={this.passwordListener} type="password" placeholder="Masukkan kata sandi Anda" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
    
                        <div class="field">
                            <p class="control">
                                <button style={button} class="button is-success" onClick={this.onSubmit}>Masuk</button>
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
    
}

