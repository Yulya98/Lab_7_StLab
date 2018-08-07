
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import ContainerAuthorization from './containers/containerAuthorization';
import Profile from './containers/containerProfile'

let store = createStore(reducers, applyMiddleware(thunk));




class App extends React.Component{
    render(){
        return(
            <div>
                <Profile></Profile>
                <ContainerAuthorization></ContainerAuthorization>
            </div>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));