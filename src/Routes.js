import React from 'react';
import { Router, Switch, Route } from 'react-router-dom';
import Home from './scenes/Home';
import NewsDetail from './scenes/NewsDetail';
import NewsCreator from './scenes/NewsCreator';
class Routes extends React.Component {
    render(){
        return(
            <Router>
                <div>
                <Switch>
                    <Route path="/"><Home/></Route>
                    <Route path="/create-news"><NewsCreator/></Route>
                    <Route path="/create-news"><NewsCreator/></Route>
                    <Route path="/detail-news/:id"><NewsDetail/></Route>
                </Switch>
                </div>
            </Router>
        );
    }
}
export default Routes