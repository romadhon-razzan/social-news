import React from 'react';
import NewsCreator from './NewsCreator';
import Content from './Content';
import { instance } from '../configs/ApiKit';
class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            contents: [],
            isLoading: true
        }
    }

    componentWillMount() {
        instance.get('news')
            .then((data) => {
                console.log('RESPONSE : ', data.data)
                this.setState({ isLoading: false, contents: data.data })
            })
            .catch(function (error) {

            });
    }

    render() {
        var container = {
            paddingLeft: '4%',
            paddingRight: '4%'
        }

        var loading = {
            height: '500px'
        }

        return (
            <div class="columns" >
                <div class="column" />
                <div style={container} class="column is-three-quarters">
                    <NewsCreator />
                    {this.state.isLoading ? (
                        <div style={loading}>
                            Please Wait ...
                    </div>
                    ) : (
                            <Content contents={this.state.contents} />
                        )}
                </div>
                <div class="column" />
            </div>
        );
    }
}
export default Home