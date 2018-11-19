import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      page: 'login'
    }
  }

  handleRegisterPage = (e) => {
    e.preventDefault();
    this.setState({
      page: 'register'
    })
  }

  render() {
    const {page} = this.state;
    return (
      <div className="App">
      {
        page === 'login' ? (
          <LoginForm onRegister={this.handleRegisterPage} />
        ) : page === 'register' ? (
          <RegisterForm />
        ) : null
      }
      </div>
    );
  }
}

export default App;
