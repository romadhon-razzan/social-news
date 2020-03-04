import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import { Link, Redirect, Route } from 'react-router-dom';
import { instance, setClientToken } from '../configs/ApiKit';

export default class SignIn extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isEmptyUsername: false,
            isEmptyPassword: false,
            isAuth: false
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
        if (this.state.username == '') {
            console.log("Username harus diisi")
            this.setState({ isEmptyUsername: true, isEmptyPassword: false })
        } else {
            if (this.state.password == '') {
                console.log("Password harus diisi")
                this.setState({ isEmptyUsername: false, isEmptyPassword: true })
            } else {
                this.setState({ isEmptyUsername: false, isEmptyPassword: false })
                console.log("LOGIN PROSES")
                instance.post('login', {
                    username: this.state.username,
                    password: this.state.password
                })
                    .then( (response) => {
                        setClientToken(response.data.meta.token)
                        this.setState({isAuth: true})
                        localStorage.setItem('token', response.data.meta.token);
                    })
                    .catch(function (error) {
                        console.log("LOGIN ERROR : ", error)
                    })
            }
        }

    }

    render() {
        var label = {
            fontWeight: 'bold'
        }
        var labelErrorStyle = {
            color: 'red',
            fontSize: 12
        }
        var button = {
            width: '100%',
            marginTop: '15px'
        }
        var labelOr = {
            width: '100%',
            textAlign: 'center'
        }

        if (this.state.isAuth){
            return <Redirect to="/home"/>;
        }
        return (
            <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Login</p>
                        <Link to="/"><button class="delete is-large" aria-label="close" /></Link>
                    </header>
                    <section class="modal-card-body">
                        <label style={label}>Username</label>
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
                        {this.state.isEmptyUsername ? (<p><label style={labelErrorStyle}>Username harus diisi</label></p>) : (<label></label>)}
                        <br></br>
                        <label style={label}>Kata Sandi</label>
                        <div class="field">
                            <p class="control has-icons-left ">
                                <input class="input" value={this.state.password} onChange={this.passwordListener} type="password" placeholder="Masukkan kata sandi Anda" />
                                <span class="icon is-small is-left">
                                    <i class="fas fa-lock"></i>
                                </span>
                            </p>
                        </div>
                        {this.state.isEmptyPassword ? (<p><label style={labelErrorStyle}>Kata sandi harus diisi</label></p>) : (<label></label>)}
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

