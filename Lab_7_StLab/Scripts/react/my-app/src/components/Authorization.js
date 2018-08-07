var React = require('react');

class UserForm extends React.Component {

        constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>
                    <label>E-mail:</label><br />
                    <input type="text" name="email" value={this.props.email} onChange={this.props.changeEmail} />
                </p>
                <p>
                    <label>Password:</label><br />
                    <input type="password" name="password" value={this.props.password} onChange={this.props.changePassword} />
                </p>
                <button onClick={()=>{this.props.handleSubmit(this.props.email, this.props.password)}}>Sign in</button>
            </div>
        );
    }
}

export default UserForm;