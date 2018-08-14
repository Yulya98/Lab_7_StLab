import React from 'react';
import Posts from '../containers/containerPosts'
import InfoAboutYourself from "../containers/containerAboutYourself"
import Album from "../containers/containerAlbum"
import "../resources/css/profileStyle/profile.css"

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
            <div>
                <div className="header"></div>
            <Router>
                <div className="container-menu">
                    <div className="menu">
                        <ul>
                            <li><Link onClick={()=>this.props.changeVisibleInformation()} to="/about">Information</Link></li>
                            <li><Link onClick={()=>this.props.changeVisibleAlbom()} to="/albom">My albom</Link></li>
                            <li><Link onClick={()=>this.props.changeVisiblePosts()} to="/posts" id="menu_none">Last posts</Link></li>
                        </ul>

                        {/*<Switch>*/}
                            {/*<Route exact path="/about" component={InfoAboutYourself}/>*/}
                            {/*<Route exact path="/albom" component={Album} />*/}
                            {/*<Route exact path="/posts" component={Posts} />*/}
                        {/*</Switch>*/}
                    </div>
                </div>
            </Router>
            </div>
        );
    }
}

export default  App;