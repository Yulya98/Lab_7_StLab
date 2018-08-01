var React = require('react')
var ReactDOM = require('react-dom')
var axios = require('axios')
import App from "./Profile.js"
import RegistrtionForm from "./App.js"

class UserForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { email: "", password: "" };

        this.onChange = this.onChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }
    onChange(e) {
        var val = e.target.value;
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        var obj = {};
        obj.Email = this.state.email;
        obj.Password = this.state.password;
        axios.post('registrationform', obj)
            .then(function (response) {
                if (response.data == true)
                    ReactDOM.render(
                        <App />,
                        document.getElementById("app")
                    );
                else
                    alert('Net takogo usera');
            });
    }

    handleClick(){
        ReactDOM.render(
            <RegistrtionForm />,
            document.getElementById("app")
        )
    }


    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <p>
                    <label>E-mail:</label><br />
                    <input type="text" name="email" value={this.state.email} onChange={this.onChange} />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input type="password" name="password" value={this.state.password} onChange={this.onChange} />
                </p>
                <input type="submit" value="Sign In" />
                <button onClick={this.handleClick}>Registration Form</button>
            </form>
        );
    }
}


ReactDOM.render(
    <UserForm />,
    document.getElementById("app")
)