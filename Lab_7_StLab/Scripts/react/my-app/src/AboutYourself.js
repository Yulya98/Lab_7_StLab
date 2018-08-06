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

    componentDidMount() {
        debugger;
        axios.post('aktiveusersearch')
            .then((response) => {
                debugger;
                console.log(response.data.City)
                this.setState({ name: response.data[0], surname: response.data[1], email: response.data[2], sphere: response.data[3], city: response.data[4] });
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