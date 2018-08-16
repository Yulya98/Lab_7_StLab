
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import mainReducer from "./reducers/index.js";
import Authorization from './containers/containerAuthorization';
import Profile from './containers/containerProfile'
import Registration from "./containers/containerRegistration"
import Posts from "./containers/containerPosts"
import Album from "./containers/containerAlbum"
import InformationAboutUser from "./containers/containerAboutYourself"
import MultiAlbum from "./containers/containerMultiAlbum"

let store = createStore(mainReducer, applyMiddleware(thunk));


class App extends React.Component{
    render(){
        return(
            <div>
                <Profile></Profile>
                <Authorization></Authorization>
                <Registration></Registration>
                <Posts></Posts>
                <Album></Album>
                <InformationAboutUser></InformationAboutUser>
                <MultiAlbum></MultiAlbum>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));