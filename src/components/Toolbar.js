import React from 'react';
import { Link } from 'react-router-dom';
class Toolbar extends React.Component {
    render() {
        const urlLogo = "https://sevima.com/wp-content/uploads/2016/06/Logo-Sevima.png"
        var navbarStyle = {
            paddingLeft: '10%',
            paddingRight: '10%'
        }
        var searchStyle = {
            width: '450px'
        }
        var iconButtonStyle = {
            marginRight: '10px'
        }

        return (
            <div>
                <navbar style={navbarStyle} className="navbar has-shadow" role="navigation" arial-label="main navigation">
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
                            <div></div>
                        ):(
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
            </div>
        );
    }
}
export default Toolbar 