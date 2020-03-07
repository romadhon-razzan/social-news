import React from 'react';
import { withGlobalState } from 'react-globally';
import 'bulma/css/bulma.css';
import { Link, Redirect } from 'react-router-dom';
import { instance, setClientToken } from '../configs/ApiKit';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

const headerStyle = { backgroundColor: '#2196F3' }
const titleStyle = { fontWeight: 'bold', color: '#FFFFFF' }
const label = { fontWeight: 'bold' }
const labelErrorStyle = { color: 'red', fontSize: 12 }
const button = { width: '100%', marginTop: '15px' }
class SignIn extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            username: '',
            password: '',
            isEmptyUsername: false,
            isEmptyPassword: false
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
            ToastsStore.error("Username harus diisi")
            this.setState({ isEmptyUsername: true, isEmptyPassword: false })
        } else {
            if (this.state.password == '') {
                ToastsStore.error("Password harus diisi")
                this.setState({ isEmptyUsername: false, isEmptyPassword: true })
            } else {
                this.setState({ isEmptyUsername: false, isEmptyPassword: false })
                this.props.setGlobalState({ loading: true })
                instance.post('login', {
                    username: this.state.username,
                    password: this.state.password
                })
                    .then((response) => {
                        if (response.data.error) {
                            this.props.setGlobalState({ isAuth: true, loading: false })
                            ToastsStore.error(response.data.message)
                        } else {
                            ToastsStore.success("Berhasil login")
                            setClientToken(response.data.meta.token)
                            localStorage.setItem('token', response.data.meta.token);
                            this.props.setGlobalState({ isAuth: true, loading: false })
                        }
                    })
                    .catch((error) => {
                        this.props.setGlobalState({ isAuth: false, loading: false })
                    })
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
                        <p style={titleStyle} class="modal-card-title">Login</p>
                        <Link to="/"><button class="delete is-normal" aria-label="close" /></Link>
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
                                {this.props.globalState.loading ? (
                                    <button style={button} class="button is-link is-loading">Loading</button>
                                ) : (
                                        <button style={button} class="button is-link" onClick={this.onSubmit}>Masuk</button>
                                    )}
                            </p>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default withGlobalState(SignIn)

