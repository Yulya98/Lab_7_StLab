var React = require('react')
var ReactDOM = require('react-dom')
var axios = require('axios')
import App from "./Profile.js"

export default class RegistrtionForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        var obj = {}
        debugger;
        obj.Name = this.props.name;
        obj.Surname = this.props.surname;
        obj.Pseudonym = this.props.pseoudonym;
        obj.Email = this.props.email;
        obj.FieldOfActivity = this.props.sphere;
        obj.City = this.props.city;
        obj.Password = this.props.password;
        axios.post('adduser', obj);
        this.props.visibleProfile();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>Name:</label><br />
                    <input type="text" name="name" value={this.props.name} onChange={this.props.onChangeName} />
                </p>
                <p>
                    <label>Surname:</label><br />
                    <input type="text" name="surname" value={this.props.surname} onChange={this.props.onChangeSurname} />
                </p>
                <p>
                    <label>Pseoudonym:</label><br />
                    <input type="text" name="pseoudonym" value={this.props.pseoudonym} onChange={this.props.onChangepPseoudonym} />
                </p>
                <p>
                    <label>E-mail:</label><br />
                    <input type="text" name="email" value={this.props.email} onChange={this.props.onChangepEmail} />
                </p>
                <p>
                    <label>Sphere of Activity:</label><br />
                    <input type="text" name="sphere" value={this.props.sphere} onChange={this.props.onChangepSphere} />
                </p>
                <p>
                    <label>City:</label><br />
                    <input type="text" name="city" value={this.props.city} onChange={this.props.onChangepCity} />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input type="password" name="password" value={this.props.password} onChange={this.props.onChangepPassword} />
                </p>
                <input type="submit" value="Sign In" />
            </form>
        );
    }
}