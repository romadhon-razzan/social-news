import React from 'react';
import 'bulma/css/bulma.css';
import {instance} from '../configs/ApiKit';
import { Link, Redirect } from 'react-router-dom';

const buttonAttachmentStyle = {
    marginTop: '15px'
}

class CreateNews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title:'',
            content:'',
            successCreate:false,
            isAuth: false
        }
    }

    closeHandler = () => {
        if (localStorage.getItem("token") != '')
            this.setState({ isAuth: true })
        else
            this.setState({ isAuth: false })
    }

    titleInputHandler = (event) => {
        this.setState({title:event.target.value})
    }

    contentInputHandler = (event) => {
        this.setState({content:event.target.value})
    }

    submitNews = () => {
        if (this.state.title == ''){
            console.log("judul kosong")
        } else {
            if (this.state.content == ''){
                console.log("kontent berita kosong")
            } else {
                instance.post('news',{
                    title:this.state.title,
                    content:this.state.content
                })
                .then((response)=>{
                    this.setState({successCreate:true})
                })
                .catch(function (error){

                })
            }
        }
    }
    render() {

        if (this.state.isAuth) {
            return <Redirect to="/beranda" />
        }

        if(this.state.successCreate){
            return(
                <Redirect to="/beranda"/>
            );
        }
        return (
            <div class="modal is-active">
                <div class="modal-background"></div>
                <div class="modal-card">
                    <header class="modal-card-head">
                        <p class="modal-card-title">Buat Berita</p>
                        <button class="delete is-large" aria-label="close" onClick={this.closeHandler}></button>
                    </header>
                    <section class="modal-card-body">
                        <div class="field">
                            <div class="control">
                                <input class="input" value={this.state.title} onChange={this.titleInputHandler} type="text" placeholder="Judul" />
                            </div>
                        </div>
                        <textarea class="textarea" value={this.state.content} onChange={this.contentInputHandler} placeholder="Ada berita baru ?"></textarea>
                        <button style={buttonAttachmentStyle} class="button is-primary">
                            Lampirkan Gambar
                        </button>
                        <hr/>
                        <button class="button is-primary" onClick={this.submitNews}> Post </button>
                    </section>
                </div>
            </div>
        );
    }
}

export default CreateNews