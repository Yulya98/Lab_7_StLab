var React = require('react');
import "../resources/css/authorizationStyle/authorizationStyle.css"
import "../resources/css/authorizationStyle/authorization.scss"
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import validator from 'validator';

const required = (value) => {
    if (!value.toString().trim().length) {
        return 'please, input value';
    }
};

const email = (value) => {
    if (!validator.isEmail(value)) {
        return `${value} is not a valid email.`
    }
};

class UserForm extends React.Component {

        constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="login-wrap">
                    <h2>Login</h2>
                    <div className="form">
                        <Form>
                            <label>E-mail:</label><br />
                            <Input type="text" name="email" placeholder="email" validations={[required, email]} value={this.props.email} onChange={this.props.changeEmail} /><br />
                            <label>Password:</label><br />
                            <Input type="password" validations={[required]} name="password" placeholder="password" value={this.props.password} onChange={this.props.changePassword} /><br />`
                        </Form>
                        <button onClick={()=>{this.props.handleSubmit(this.props.email, this.props.password)}}>Sign in</button>
                        <button onClick={() => {this.props.visibleProfile()}}>Registration</button>
                    </div>
                </div>
            </div>
        );
    }
}

export default UserForm;