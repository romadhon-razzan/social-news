import React, { useState, useEffect } from 'react';
import 'bulma/css/bulma.css';
import { instance } from '../configs/ApiKit';
import { useParams, Redirect } from 'react-router-dom';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

const buttonAttachmentStyle = { marginTop: '15px' }

const CreateNews = (props) => {
    let { newsId } = useParams();
    useEffect(() => {
        console.log("Data : ", newsId)
    },[]);
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [successCreate, setSuccessCreate] = useState(false);
    const [isAuth, setIsAuth] = useState(false);

    const closeHandler = () => { localStorage.getItem("token") != '' ? setIsAuth(true) : setIsAuth(false) }
    const titleInputHandler = (event) => { setTitle(event.target.value) }
    const contentInputHandler = (event) => { setContent(event.target.value) }
    const submitNews = () => {
        if (title == '') {
            ToastsStore.error("Silakan masukkan judul berita")
        } else {
            if (content == '') {
                ToastsStore.error("Silakan masukkan kontent berita")
            } else {
                instance.post('news', { title, content })
                    .then((response) => { setSuccessCreate(true) })
                    .catch(function (error) {

                    })
            }
        }
    }

    if (isAuth) { return <Redirect to="/beranda" /> }
    if (successCreate) { return <Redirect to="/beranda" /> }
    return (
        <div class="modal is-active">
            <div class="modal-background"></div>
            <div class="modal-card">
            <ToastsContainer position={ToastsContainerPosition.BOTTOM_CENTER} store={ToastsStore} />
                <header class="modal-card-head">
                    <p class="modal-card-title">Buat Berita</p>
                    <button class="delete is-large" aria-label="close" onClick={closeHandler}></button>
                </header>
                <section class="modal-card-body">
                    <div class="field">
                        <div class="control">
                            <input class="input" value={title} onChange={titleInputHandler} type="text" placeholder="Judul" />
                        </div>
                    </div>
                    <textarea class="textarea" value={content} onChange={contentInputHandler} placeholder="Ada berita baru ?"></textarea>
                    <button style={buttonAttachmentStyle} class="button is-primary">
                        Lampirkan Gambar
                        </button>
                    <hr />
                    <button class="button is-primary" onClick={submitNews}> Post </button>
                </section>
            </div>
        </div>
    );
}

export default CreateNews