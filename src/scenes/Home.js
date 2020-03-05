import React from 'react';
import NewsCreator from './NewsCreator';
import Content from './Content';
import Toolbar from '../components/Toolbar';
import { instance } from '../configs/ApiKit';

const container = {
    paddingLeft: '4%',
    paddingRight: '4%'
}
const loadingStyle = {
    height: '500px'
}
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
                console.log('RESPONSE : ', data.data.data)
                this.setState({ isLoading: false, contents: data.data.data })
            })
            .catch(function (error) {
            });
    }

    render() {
        return (
            <div>
                <div class="columns" >
                    <div class="column" />
                    <div style={container} class="column is-three-quarters">
                        <NewsCreator />
                        {this.state.isLoading ? (
                            <div style={loadingStyle}>
                                Please Wait ...
                    </div>
                        ) : (
                                <Content contents={this.state.contents} />
                            )}
                    </div>
                    <div class="column" />
                </div>
            </div>
        );
    }
}
export default Home