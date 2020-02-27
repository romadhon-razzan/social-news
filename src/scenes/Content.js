import React, { Fragment } from 'react';
import HeaderContent from './HeaderContent';
export default function Content(props){
    var contentStyle = {
        marginTop: '15px',
        padding: '10px',
        backgroundColor: 'white',
        borderRadius: '10px',
        border: '1px solid #CFD8DC'
    }
    return (
        <div>
            {props.contents.map((content, index) => <div key={index} style={contentStyle}>
                <HeaderContent />
                <hr />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDKliPAVm3AWTAX-gwQB3JxCOTJgONW_OHUoV6cBElF-8SVL-O" />
                <div>
                    <strong>{content.title}</strong>
                    <p>{content.body}</p>
                </div>
            </div>)
            }
        </div>

    )
}