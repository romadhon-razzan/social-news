import React from 'react';
import 'bulma/css/bulma.css';
import { instance } from '../configs/ApiKit';
import { Link, Redirect } from 'react-router-dom';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            confirmPassword: '',
            isloading: false
        }
    }

    usernameInputHandler = (event) => {
        this.setState({ username: event.target.value })
    }

    passwordInputHandler = (event) => {
        this.setState({ password: event.target.value })
    }
    confirmPasswordInputHandler = (event) => {
        this.setState({ confirmPassword: event.target.value })
    }

    submit = () => {
        if (this.state.username == '') {
            ToastsStore.error("Username harus diisi")
        } else {
            if (this.state.password == '') {
                ToastsStore.error("Kata sandi harus diisi")
            } else {
                if (this.state.confirmPassword == '') {
                    ToastsStore.error("Konfirmasi kata sandi harus diisi")
                } else {
                    if (this.state.password != this.state.confirmPassword) {
                        ToastsStore.error("Kata sandi tidak sama")
                    } else {
                        if (this.state.password.length < 6 || this.state.confirmPassword.length < 6) {
                            ToastsStore.error("Kata sandi minimal 6 karakter")
                        } else {
                            this.setState({ isloading: true })
                            instance.post('register', {
                                username: this.state.username,
                                password: this.state.password
                            })
                                .then((response) => {
                                    console.log("Response : ", response)
                                    this.setState({ isloading: false })
                                    if (response.status === 200) {
                                        if (response.data.error) {
                                            ToastsStore.error(response.data.message)
                                        } else {
                                            ToastsStore.success(response.data.message)
                                        }
                                    } else if (response.status === 201) {
                                        ToastsStore.error(response.statusText)
                                    }
                                })
                                .catch((error) => {
                                    this.setState({ isloading: false })
                                    console.log(error)
                                })
                        }
                    }
                }
            }
        }
    }

    render() {
        var label = {
            fontWeight: 'bold'
        }
        var button = {
            width: '100%',
            marginTop: '15px'
        }
        var bodyStyle = {
            width: '100%',
            marginTop: '10%',
            border: '2px solid #0091EA',
            borderRadius: '10px'
        }
        var headerStyle={
            marginTop:'10%'
        }

        // if (this.state.registerSucces){
        //     return <Redirect to="/"/>
        // }
        return (
            <div class="columns">
                <div class="column" />
                <div class="column">
                    <ToastsContainer position={ToastsContainerPosition.BOTTOM_CENTER} store={ToastsStore} />
                    <button style={headerStyle} class="button is-secondary" >Kembali</button>
                    
                    <div style={bodyStyle}>
                        <section class="modal-card-body">
                            <label style={label}>Username</label>
                            <div class="field">
                                <p class="control has-icons-left has-icons-right">
                                    <input class="input" value={this.state.username} onChange={this.usernameInputHandler} type="email" placeholder="Masukkan username Anda" />
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
                                    <input class="input" value={this.state.password} onChange={this.passwordInputHandler} type="password" placeholder="Masukkan kata sandi Anda" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>

                            <label style={label}>Konfirmasi Kata Sandi</label>
                            <div class="field">
                                <p class="control has-icons-left ">
                                    <input class="input" value={this.state.confirmPassword} onChange={this.confirmPasswordInputHandler} type="password" placeholder="Ketik ulang kata sandi" />
                                    <span class="icon is-small is-left">
                                        <i class="fas fa-lock"></i>
                                    </span>
                                </p>
                            </div>

                            <div class="field">
                                <p class="control">
                                    {this.state.isloading ? (
                                        <button style={button} class="button is-link is-loading" onClick={this.submit}>Daftar</button>
                                    ) : (
                                            <button style={button} class="button is-link" onClick={this.submit}>Daftar</button>
                                        )}

                                </p>
                            </div>
                        </section>
                    </div>

                </div>
                <div class="column" />
            </div>
        );
    }
}
export default SignUp