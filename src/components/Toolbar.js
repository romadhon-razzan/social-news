import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { setClientToken } from '../configs/ApiKit';
import { withGlobalState } from 'react-globally';

const urlLogo = "https://sevima.com/wp-content/uploads/2016/06/Logo-Sevima.png"
const navbarStyle = {
    paddingLeft: '15%',
    paddingRight: '15%',
    top: 0,
    width: '100%',
    position: 'fixed'
}
const searchStyle = {
    width: '450px'
}
const manageStyle = {
    marginRight: '50px'
}

class Toolbar extends React.Component {
    constructor(props){
        super(props)
    }
    signOutHandler = () => {
        setClientToken('')
        localStorage.removeItem('token')
        this.props.setGlobalState({
            isAuth: false,
            isLogout: true
          })
    }
    render() {
        if (this.props.globalState.isLogout) {
            this.props.setGlobalState({
                isLogout: false
              })
            return <Redirect to="/"/>;
        }
        return (
            <navbar style={navbarStyle} className="navbar is-secondary has-shadow" role="navigation" arial-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item" ><img src={urlLogo} width="34" height="28" /></a>
                    <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item">
                            <div className="field">
                                <div className="control has-icons-right">
                                    <input style={searchStyle} className="input is-primary is-rounded" type="text" placeholder="Cari"></input>
                                    <span className="icon is-medium is-right">
                                        <i className="fas fa-search"></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    {this.props.isLogin ? (
                        <div className="navbar-end">
                            <div className="navbar-item">
                                <Link to="/beranda" style={manageStyle} > Beranda</Link>
                                <Link to="/kelola-berita" style={manageStyle} > Kelola</Link>
                                <label class="button is-danger" onClick={ this.signOutHandler} > Keluar</label>
                            </div>
                        </div>
                    ) : (
                            <div className="navbar-end">
                                <div className="navbar-item">
                                    <div className="buttons"  >
                                        <Link className="button is-primary is-rounded" to="/daftar">
                                            <strong>Daftar</strong>
                                        </Link>
                                        <Link className="button is-link is-rounded" to="/masuk">Masuk</Link>
                                    </div>
                                </div>
                            </div>
                        )}
                </div>
            </navbar>
        );
    }
}
export default withGlobalState(Toolbar)