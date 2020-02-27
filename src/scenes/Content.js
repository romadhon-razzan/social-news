import React from 'react';
import HeaderContent from './HeaderContent';
export default class Content extends React.Component {
    render() {
        var content = {
            marginTop: '15px',
            padding: '10px',
            backgroundColor: 'white',
            borderRadius: '10px',
            border: '1px solid #CFD8DC'
        }
        return (
            <div style={content}>
                <HeaderContent />
                <hr />
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQDKliPAVm3AWTAX-gwQB3JxCOTJgONW_OHUoV6cBElF-8SVL-O" />
                <div>
                    <strong>Where can I get some?</strong>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                </div>
            </div>
        );
    }
}