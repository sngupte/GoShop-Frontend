import React, { Component } from 'react';
import './Login.css';
import Service from '../api/Service';
import Cookie from 'universal-cookie';

const cookie = new Cookie();

class LoginForm extends Component {
  state = {
    signup: false,
    email: '',
    password: '',
    name: '',
    phoneNumber: '',
    erroMessage: ""
  }


  handleChange = (e) => {
    let target = e.target;
    let name = target.name;
    this.setState({
      [name]: target.value
    });
    console.info(this.state);
  };

  toggleLoginSignup() {
    if (this.state.signup) {
      this.setState({ signup: false })
    } else {
      this.setState({ signup: true })
    }
  }

  registerUser = async (e) => {
    e.preventDefault();
    console.log(this.state);
    const reqBody = {
      email: this.state.email,
      password: this.state.password,
      name: this.state.name,
      phoneNumber: this.state.phoneNumber
    }

    console.log(reqBody);
    const resp = await Service.post('/registerUser', reqBody);
    if (resp.data.success) {
      console.log(resp);
      this.toggleLoginSignup();
    } else {

    }
  }

  loginUser = async (e) => {
    e.preventDefault();
    console.log(this.state);
    const reqBody = {
      email: this.state.email,
      password: this.state.password
    }
    const resp = await Service.post('/login', reqBody).catch(()=>{this.setState({erroMessage:"Invalid login credentials"})});
    if (resp && resp.data.success) {
      console.log(resp.data);
      cookie.set('user', resp.data, { path: "/" });
      this.props.setLogginUser();
      this.props.history.push("/");
    }
  }

  render() {
    console.log(this.props);
    if (this.state.signup) {
      return (
        <div className="login-page">
          <div className="form" onSubmit={this.registerUser}>
            <form className="register-form">
              <input className="input" type="text" placeholder="Name" name="name" onChange={this.handleChange} />
              <input className="input" type="text" placeholder="Phone" name="phoneNumber" onChange={this.handleChange} />
              <input className="input" type="text" placeholder="Email Address" name="email" onChange={this.handleChange} />
              <input className="input" type="password" placeholder="Password" name="password" onChange={this.handleChange} />
              <button>create</button>
              <p className="message" onClick={() => this.toggleLoginSignup()}>Already registered?</p>
            </form>
          </div>

        </div>

      );
    } else {
      return (
        <div className="login-page">
        
          <div className="form">
          <label className="errorMsgLabel">{this.state.erroMessage}</label>
            <form className="login-form" onSubmit={this.loginUser}>
          
              <input type="text" placeholder="Email Address" name="email" onChange={this.handleChange} />
              <input type="password" placeholder="Password" name="password" onChange={this.handleChange} />
              <button>login</button>
              <p className="message" onClick={() => this.toggleLoginSignup()}>Not registered?</p>
            </form>
          </div>
        </div>

      );
    }
  }
}

export default LoginForm;