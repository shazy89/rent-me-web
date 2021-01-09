import React, { Component } from 'react';
import axios from 'axios'
import { NavLink } from 'react-router-dom';
import {  Icon, TextInput } from 'react-materialize'
class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: ''
     };
  }
handleChange = (event) => {
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  };
handleSubmit = (event) => {
    event.preventDefault()
    const {username, email, password, password_confirmation} = this.state
    let user = {
      username: username,
      email: email,
      password: password,
      password_confirmation: password_confirmation
    }
axios.post('http://localhost:3001/users', {user})
    .then(response => {
      if (response.data.status === 'created') {
        this.props.handleLogin(response.data)
        this.redirect()
      } else {
        this.setState({
          errors: response.data.errors
        })
      }
    })
    .catch(error => console.log('api errors:', error))
  };
redirect = () => {
    this.props.history.push('/')
  }
handleErrors = () => {
    return (
      <div>
        <ul>{this.state.errors.map((error) => {
          return <li key={error}>{error}</li>
        })}</ul> 
      </div>
    )
  }
render() {
    const {username, email, password, password_confirmation} = this.state
return (
      <div className="container">
        <h1 ><i className="large material-icons">insert_create</i>Sign Up</h1>

        <form onSubmit={this.handleSubmit}>
          <TextInput
            placeholder="username"
            type="text"
            name="username"
            value={username}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={this.handleChange}
          />
          <TextInput 
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <TextInput
            placeholder="password confirmation"
            type="password"
            name="password_confirmation"
            value={password_confirmation}
            onChange={this.handleChange}
            />
          
          <button placeholder="submit" type="submit"  
             node="button"
           
              waves="light"
              className="waves-effect orange btn"
              ><Icon right> check</Icon>
                Sign Up
            </button>
             <NavLink to="/login" className="right">Already have an account? Log in</NavLink>
             <NavLink to='/' style={{ margin: '0 20px 20px'}}>Home Page</NavLink>
          </form>
          <div>
            {
              this.state.errors ? this.handleErrors() : null
            }
          </div>
        </div>
      );
    }
  }
export default Signup;    

        
