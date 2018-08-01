var React = require('react')
var ReactDOM = require('react-dom')
var axios = require('axios')
import App from "./Profile.js"

export default class RegistrtionForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "", surname:"",pseoudonym: "", email:"",sphere:"",city:"",password:"" };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onChange(e) {
        var val = e.target.value;
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        var obj = {};
        obj.Name = this.state.name;
        obj.Surname = this.state.surname;
        obj.Pseudonym = this.state.pseoudonym;
        obj.Email = this.state.email;
        obj.FieldOfActivity = this.state.sphere;
        obj.City = this.state.city;
        obj.Password = this.state.password;
        axios.post('adduser', obj);
        ReactDOM.render(
            <App />,
            document.getElementById("app")
        );
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Name:</label><br />
                    <input type="text" name="name" value={this.state.name} onChange={this.onChange} />
                </p>
                <p>
                    <label>Surname:</label><br />
                    <input type="text" name="surname" value={this.state.surname} onChange={this.onChange} />
                </p>
                <p>
                    <label>Pseoudonym:</label><br />
                    <input type="text" name="pseoudonym" value={this.state.pseoudonym} onChange={this.onChange} />
                </p>
                <p>
                    <label>E-mail:</label><br />
                    <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
                </p>
                <p>
                    <label>Sphere of Activity:</label><br />
                    <input type="text" name="sphere" value={this.state.sphere} onChange={this.onChange} />
                </p>
                <p>
                    <label>City:</label><br />
                    <input type="text" name="city" value={this.state.city} onChange={this.onChange} />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input type="text" name="password" value={this.state.password} onChange={this.onChange} />
                </p>
                <input type="submit" value="Sign In" />
            </form>
        );
    }
}