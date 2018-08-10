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
                <div className="container">
                    <div id="signup">
                        <div className="headers">
                            <h3>Sign Up</h3><br /><br />
                        </div>
                        <div className="sep"></div>
                        <div className="inputs">
                            <input type="text" name="name" value={this.props.name} onChange={this.props.onChangeName} placeholder="name" autoFocus/><br />
                            <input type="text" name="surname" value={this.props.surname} placeholder="surname" onChange={this.props.onChangeSurname} /><br />
                            <input type="text" name="pseoudonym" value={this.props.pseoudonym} placeholder="pseoudonym" onChange={this.props.onChangepPseoudonym} /><br />
                            <input type="text" name="email" value={this.props.email} onChange={this.props.onChangepEmail} placeholder="e-mail" /><br />
                            <input type="text" name="sphere" value={this.props.sphere} onChange={this.props.onChangepSphere} placeholder="sphere" /><br />
                            <input type="text" name="city" value={this.props.city} onChange={this.props.onChangepCity} placeholder="city"/><br />
                            <input type="password" name="password" value={this.props.password} onChange={this.props.onChangepPassword} placeholder="Password"/><br />
                            <input type="submit" value="Sign Up" />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}