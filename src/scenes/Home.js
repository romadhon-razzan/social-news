import React from 'react';
import NewsCreator from './NewsCreator';
import Content from './Content';
class Home extends React.Component {
    render() {
        var container = {
            paddingLeft: '4%',
            paddingRight: '4%'
        }
        return (
            <div class="columns" >
                <div class="column" />
                <div style={container} class="column is-three-quarters">
                    <NewsCreator />
                    <Content />
                </div>
                <div class="column" />
            </div>
        );
    }
}
export default Home