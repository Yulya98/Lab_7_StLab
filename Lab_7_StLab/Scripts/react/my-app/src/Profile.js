import React from 'react';
//import Albom from './Albom'
import MyComponent from './Albom'
import InfoAboutYourself from './AboutYourself'
import Posts from './Posts'

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    Redirect
} from 'react-router-dom'


class App extends React.Component {
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
                        <hr />

                        <Switch>
                            <Route exact path="/about" component={InfoAboutYourself} />
                            <Route exact path="/albom" component={MyComponent} />
                            <Route exact path="/posts" component={Posts} />
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;

ReactDOM.render(
    <App />,
    document.getElementById("app")
)