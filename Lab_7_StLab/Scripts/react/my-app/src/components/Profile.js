import React from 'react';
import Posts from '../containers/containerPosts'
import InfoAboutYourself from "../containers/containerAboutYourself"
import Album from "../containers/containerAlbum"

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom'


class App extends React.Component {
    constructor(props) {
        super(props);
        debugger;
    }

    render() {
        return (
            <Router>
                <div className="App">
                    <div className="container">
                        <ul>
                            <li><Link to="/about">Information</Link></li>
                            <li><Link to="/albom">My albom</Link></li>
                            <li><Link to="/posts">Last posts</Link></li>
                        </ul>
                        <hr/>

                        <Switch>
                            <Route exact path="/about" component={InfoAboutYourself}/>
                            <Route exact path="/albom" component={Album} />
                            <Route exact path="/posts" component={Posts} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default  App;