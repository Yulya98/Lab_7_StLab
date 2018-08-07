import React from 'react';
var axios = require('axios')


class InfoAboutYourself extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
         this.props.loadData();
    }

    render() {
        return (
            <div>
                <p><label>Name: {this.props.name}</label></p><br />
                <p><label>Surname: {this.props.surname}</label></p> <br />
                <p><label>Email: {this.props.email}</label></p><br />
                <p><label>Sphere: {this.props.sphere}</label></p><br />
                <p><label>City: {this.props.city}</label></p><br />
            </div>
            );
    }
}


export default InfoAboutYourself;