import React, { Component } from 'react';

const initialState = {
    email: "",
    password: "",
    emailError: "",
    passwordError: ""
}


class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = initialState
    }
    handleUsernameChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }
    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }


    validate = () => {
        let emailError = "";
        let passwordError = "";


        if (!this.state.email.includes('@')) {
            emailError = "Invalid email"
        }
        if (!this.state.email) {
            emailError = "Email is required"
        }
        if (!this.state.password) {
            passwordError = "Password is required"
        }
        if (emailError || passwordError) {
            this.setState({
                emailError, passwordError
            });
            return false;
        }
        return true
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const isValid = this.validate();
        if (isValid) {
            console.log(this.state)
            this.setState(initialState)
            window.location.href = '/meeting'
        }
    }
    render() {

        return (
            <div className="container">
                <div className="card card-body col-md-6 offset-3 mt-4">
                    <form onSubmit={this.handleSubmit}>
                        <h4> <u>Login Form</u> </h4>
                        <div className="form-group">
                            <label>Email : </label>
                            <input type="text" value={this.state.email} onChange={this.handleUsernameChange} className="form-control" placeholder="Email" />
                            <div style={{ color: "red", fontSize: "10px" }}>{this.state.emailError}</div>
                        </div>
                        <div className="form-group">
                            <label>Password : </label>
                            <input type="password" value={this.state.password} onChange={this.handlePasswordChange} className="form-control" placeholder="Password" />
                            <div style={{ color: "red", fontSize: "10px" }}>{this.state.passwordError}</div>
                        </div>
                        <button type="submit" className="btn btn-secondary"  disabled={
        this.state.email === "" || this.state.password === "" ? true : false
    }>Login</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default LoginForm

