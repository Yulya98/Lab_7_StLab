import React from 'react';
var axios = require('axios')


class InfoAboutYourself extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", surname: "", pseoudonym: "", email: "", sphere: "", city: "", password: ""  };
    }

    onChange(state) {
        this.setState(state);
    }

    componentWillMount() {
        axios.post('aktiveusersearch')
            .then((response) => {
                console.log(response.data.City)
                this.setState({ name: response.data.Name, surname: response.data.Surname, pseoudonym: response.data.Pseoudonym, email: response.data.Email, sphere: response.data.FieldOfActivity, city: response.data.City });
            });
    }

    render() {
        return (
            <div>
                <p><label>Name: {this.state.name}</label></p><br />
                <p><label>Surname: {this.state.surname}</label></p> <br />
                <p><label>Email: {this.state.email}</label></p><br />
                <p><label>Sphere: {this.state.sphere}</label></p><br />
                <p><label>City: {this.state.city}</label></p><br />
            </div>
            );
    }
}


export default InfoAboutYourself;