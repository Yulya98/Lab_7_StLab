import React from 'react';
import MyComponent from './Albom'
import InfoAboutYourself from './AboutYourself'
import Posts from './Posts'
var ReactDOM = require('react-dom');
import * as actionCreators from "./actions/index.js"
import {connect} from "react-redux";

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

    componentWillMount() {
        if(typeof this.props.somthing != "undefined") {
            this.props.somthing();
        }
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
                            <Route exact path="/albom"
                                   component={() => <MyComponent idActiveUser={this.props.idActiveUser}/>}/>
                            <Route exact path="/posts" component={Posts}/>
                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById("app")
);

const mapStateToProps=(state)=>{
    debugger;
    return state
};

export default connect (mapStateToProps, actionCreators)(App);
