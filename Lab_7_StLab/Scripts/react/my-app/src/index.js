
import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import reducers from "./reducers/index.js";
import UserForm from './Start';
import './index.css';

let store = createStore(reducers, applyMiddleware(thunk))




class App extends React.Component{
    render(){
        return(
            <UserForm></UserForm>
        )
    }
}

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('app'));