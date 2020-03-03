import React, { Fragment, useState } from 'react';
import HeaderContent from './HeaderContent';
export default class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            news: []
        }
    }

    componentDidMount() {
        this.setState({
            news: this.props.contents
        })
    }
    render() {

        var contentStyle = {
            marginTop: '15px',
            padding: '20px',
            backgroundColor: 'white',
            borderRadius: '10px',
            border: '1px solid #CFD8DC'
        }

        return (

            <div>
                    {this.state.news.map(post =>
                        <div key={post.id} style={contentStyle}>
                        <HeaderContent header={post.user} />
                        <br />
                        <div class="columns">
                            <div class="column"/>
                            <div class="column"><img src={post.photo} /></div>
                            <div class="column"/>
                        </div>
                        
                        <div>
                            <strong>{post.title}</strong>
                            <p>{post.content}</p>
                        </div>
                    </div>
                    )}
            </div>

        )
    }


}