import React from 'react';
export default class HeaderContent extends React.Component {
    render() {
        var optionStyle = {
            textAlign: 'right'
        }
        return (
            <div class="columns">
                <div class="column is-four-fifths">
                    <article class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                            </figure>
                        </div>
                        <div class="media-content">
                            <div class="content">
                                <strong>John Smith</strong>
                                <br />
                                <small>31 menit yang lalu</small>
                            </div>
                        </div>
                    </article>
                </div>
                <div class="column">
                    <div style={optionStyle}>
                        <span class="icon">
                            <i class="fas fa-home"></i>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}