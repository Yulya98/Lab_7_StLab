var React = require('react');
import "../resources/css/authorizationStyle.css"
import "../resources/css/authorizationAndRegistration.css"

class UserForm extends React.Component {

        constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="header">PHOTO GALLERY</div>
                <div className="container">

                    <div id="signup">
                         <div className="headers">
                             <h3>Sign In</h3>
                             <p>If you haven't account click on Registration button</p>
                         </div>
                    <div className="sep"></div>
                        <div className="inputs">

                            <input type="email" name="email" value={this.props.email} onChange={this.props.changeEmail} placeholder="e-mail" autoFocus/><br />

                            <input type="password" placeholder="Password" onChange={this.props.changePassword} name="password" value={this.props.password} /><br />

                            <button className="btn-style" onClick={()=>{this.props.handleSubmit(this.props.email, this.props.password)}}>Sign in</button>
                            <button className="btn-style" onClick={() => {this.props.visibleProfile()}}>Registration</button>

                       </div>
                    </div>
                </div>

                {/*<p>*/}
                    {/*<label>E-mail:</label><br />*/}
                    {/*<input type="text" name="email" value={this.props.email} onChange={this.props.changeEmail} />*/}
                {/*</p>*/}
                {/*<p>*/}
                    {/*<label>Password:</label><br />*/}
                    {/*<input type="password" name="password" value={this.props.password} onChange={this.props.changePassword} />*/}
                {/*</p>*/}
                {/*<button onClick={()=>{this.props.handleSubmit(this.props.email, this.props.password)}}>Sign in</button>*/}
                {/*<button onClick={() => {this.props.visibleProfile()}}>Registration</button>*/}
            </div>
        );
    }
}

export default UserForm;