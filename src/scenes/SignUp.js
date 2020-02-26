import React from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
function SignUp() {
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
                    <p class="modal-card-title">Daftar</p>
                    <Link to="/"><button class="delete is-large" aria-label="close"></button></Link>
                </header>
                <section class="modal-card-body">
                <label style={label}>Alamat Email</label>
                    <div class="field">
                        <p class="control has-icons-left has-icons-right">
                            <input class="input" type="email" placeholder="Masukkan alamat email Anda" />
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
                            <input class="input" type="password" placeholder="Masukkan kata sandi Anda" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>

                    <label style={label}>Konfirmasi Kata Sandi</label>
                    <div class="field">
                        <p class="control has-icons-left ">
                            <input class="input" type="password" placeholder="Ketik ulang kata sandi" />
                            <span class="icon is-small is-left">
                                <i class="fas fa-lock"></i>
                            </span>
                        </p>
                    </div>

                    <div class="field">
                        <p class="control">
                            <button style={button} class="button is-success">Daftar</button>
                        </p>
                    </div>
                </section>
            </div>
        </div>
    );
}
export default SignUp