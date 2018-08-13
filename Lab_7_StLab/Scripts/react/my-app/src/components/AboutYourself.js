import React from 'react';
import "../resources/css/informationCard/information.css"


class InfoAboutYourself extends React.Component {
    constructor(props) {
        super(props);
    }

    componentWillUnmount(){

    }

    componentDidMount() {
         this.props.loadData();
    }

    render() {
        debugger;
        return (
            <div className="profile_card">
                <p>Abou you</p>
                <img src="/Scripts/react/my-app/src/resources/depositphotos_190007376-stock-illustration-rooster-head-icon-black-color.jpg" />
                <hr />
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