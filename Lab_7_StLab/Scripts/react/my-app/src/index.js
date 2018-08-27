import React from 'react';
import ReactDOM from 'react-dom';
import {PrivateRoute} from "./components/PrivateRouter";
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers/index.js";
import Authorization from './containers/containerAuthorization';
import Profile from './containers/containerProfile'
import Posts from "./containers/containerPosts"

import {
    BrowserRouter as Router,
    Route
} from "react-router-dom";

const App = () => (
    <Router>
        <div>
            <PrivateRoute path="/profile" component={Profile} />
            <Route path="/" component={Posts} />
            <Route path="/login" component={Authorization} />
        </div>
    </Router>
);

// ReactDOM.render(<AuthExample />, document.getElementById('app'));


// import {
//     BrowserRouter as Router,
//     Route,
//     Redirect,
//     BrowserRouter,
//     withRouter
// } from "react-router-dom"

let store = createStore(mainReducer, applyMiddleware(thunk));


// class App extends React.Component{
//     render(){
//         return(
//             <div>
//                 <Profile></Profile>
//                 <Authorization></Authorization>
//                 <Registration></Registration>
//                 <Posts></Posts>
//                 <Album></Album>
//                 <InformationAboutUser></InformationAboutUser>
//                 <MultiAlbum></MultiAlbum>
//             </div>
//         )
//     }
// }

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));