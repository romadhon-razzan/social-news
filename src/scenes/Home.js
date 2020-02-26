import React from 'react';
class Home extends React.Component {
    render() {
        var layoutContent = {
            width: '100%',
            height: '30%'
        }
        return (
            <div class="columns">
                <div class="column" />
                <div class="column is-three-quarters">
                    <div>
                        <strong>Buat Berita</strong>
                        <hr/>
                        <label class="label" >Ada berita baru ?</label>
                    </div>
                    <div>
                        <div class="columns">
                            <div class="column is-three-quarters">
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
                                Edit
                            </div>
                        </div>
                    </div>
                    <hr />
                    <img style={layoutContent} src="https://bulma.io/images/placeholders/128x128.png" />
                    <div>
                        <strong>Where can I get some?</strong>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc.</p>
                    </div>
                </div>
                <div class="column" />
            </div>
        );
    }
}
export default Home