import React from 'react';
import "../resources/css/profileStyle/profile.css"

import {
    BrowserRouter as Router,
    Link,
} from 'react-router-dom'


class App extends React.Component {

    constructor(props) {
        super(props);
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
                    </div>
                </div>
            </Router>
            </div>
        );
    }
}

export default  App;