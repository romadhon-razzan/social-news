import React from 'react';
import { instance, setClientToken } from '../configs/ApiKit';
import { withGlobalState } from 'react-globally';
import { Link, Redirect } from 'react-router-dom';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

const headerStyle = { backgroundColor: '#2196F3' }
const titleStyle = { fontWeight: 'bold', color: '#FFFFFF' }
const label = { fontWeight: 'bold' }
const button = { width: '100%', marginTop: '15px' }

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = { username: '', password: '', confirmPassword: '' }
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
    requestRegister() {
        this.props.setGlobalState({ loading: true })
        instance.post('register', {
            username: this.state.username,
            password: this.state.password
        })
            .then((response) => {
                console.log("Response : ", response)
                if (response.data.error) {
                    this.props.setGlobalState({ isAuth: true, loading: false })
                    ToastsStore.error(response.data.message)
                } else {
                    ToastsStore.success("Berhasil daftar")
                    setClientToken(response.data.meta.token)
                    localStorage.setItem('token', response.data.meta.token);
                    this.props.setGlobalState({ isAuth: true, loading: false })
                }
            })
            .catch((error) => {
                this.props.setGlobalState({ isAuth: true, loading: false })
                console.log(error)
            })
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
                            this.requestRegister()
                        }
                    }
                }
            }
        }
    }

    render() {
        if (this.props.globalState.isAuth) {
            return <Redirect to="/beranda" />;
        }
        return (
            <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <ToastsContainer position={ToastsContainerPosition.BOTTOM_CENTER} store={ToastsStore} />
                    <header style={headerStyle} class="modal-card-head">
                        <p style={titleStyle} class="modal-card-title">Daftar</p>
                        <Link to="/"><button class="delete is-normal" aria-label="close" /></Link>
                    </header>
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
                                {this.props.globalState.loading ? (
                                    <button style={button} class="button is-link is-loading" onClick={this.submit}>Daftar</button>
                                ) : (
                                        <button style={button} class="button is-link" onClick={this.submit}>Daftar</button>
                                    )}
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
export default withGlobalState(SignUp)