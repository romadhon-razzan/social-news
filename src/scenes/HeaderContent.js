import React from 'react';
import moment from 'moment';
import timezone from 'moment-timezone';
moment.locale('id');

const optionStyle = {
    textAlign: 'right'
}

export default class HeaderContent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div class="columns">
                <div class="column is-four-fifths">
                    <article class="media">
                        {/* <div class="media-left">
                            <figure class="image is-48x48">
                                <img class="is-rounded" src="https://bulma.io/images/placeholders/128x128.png" />
                            </figure>
                        </div> */}
                        <div class="media-content">
                            <div class="content">
                                <strong>{this.props.header.user.username}</strong>
                                <br />
                                <small>{
                                    moment(this.props.header.user.updated_at).tz('Asia/Jakarta').startOf('hour').fromNow()
                                }</small>
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