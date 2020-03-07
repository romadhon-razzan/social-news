import React from 'react';
import NewsCreator from '../scenes/NewsCreator';
import { instance } from '../configs/ApiKit';
import { Link } from 'react-router-dom';
import { ToastsContainer, ToastsStore, ToastsContainerPosition } from 'react-toasts';

const contentStyle = {
    marginTop: '7%'
}
const numberStyle = {
    width: '50px'
}

export default class NewsManager extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            items: []
        }
        this.getNewsList = this.getNewsList.bind(this)
    }

    componentWillMount() {
        this.getNewsList()
    }

    getNewsList() {
        instance.get('news-by-user')
            .then((response) => {
                this.setState({ items: response.data.data })
            })
            .catch((error) => {

            })
    }

    removeHandler(id) {
        var param = `news/${id}`
        instance.delete(param)
            .then((response) => {
                ToastsStore.success("Berhasil menghapus")
                this.getNewsList()
            })
            .catch((error) => {

            })
    }

    render() {
        return (
            <div style={contentStyle}>
                <div class="columns">
                    <div class="column" />
                    <div class="column is-three-quarters">
                    <NewsCreator />
                        <ToastsContainer position={ToastsContainerPosition.BOTTOM_CENTER} store={ToastsStore} />
                        {this.state.items.map((item, index) =>
                            <div key={item.id}>
                                <div class="columns is-1">
                                    <div style={numberStyle} class="column">
                                        <strong>{index + 1}</strong>
                                    </div>
                                    <div class="column is-9">
                                        <strong> {item.title}</strong>
                                        <br />
                                        {item.content}
                                    </div>
                                    <div class="column is-3">
                                        <div className="buttons"  >
                                            <button className="button is-link is-outlined is-small" >
                                                <Link to="ubah-berita/beritaku"> Ubah </Link>
                                            </button>
                                            <button className="button is-danger is-outlined is-small" onClick={() => this.removeHandler(item.id)}>Hapus</button>
                                        </div>
                                    </div>
                                </div>
                                {index != this.state.items.length - 1 && (
                                    <hr />
                                )}
                            </div>)}
                    </div>
                    <div class="column" />
                </div>
            </div>
        );
    }
}