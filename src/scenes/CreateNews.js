import React from 'react';
import 'bulma/css/bulma.css';
import { Link } from 'react-router-dom';
function CreateNews() {
    var label = {
        fontWeight: 'bold'
    }
    var buttonAttachmentStyle = {
        marginTop: '15px'
    }

    return (
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Create News</p>
                    <Link to="/"><button class="delete is-large" aria-label="close"></button></Link>
                </header>
                <section class="modal-card-body">
                    <textarea class="textarea"  placeholder="Ada berita baru ?"></textarea>
                    <button style={buttonAttachmentStyle} class="button is-primary">
                        Lampirkan Gambar
                    </button>
                </section>
            </div>
        </div>
    );
}

export default CreateNews