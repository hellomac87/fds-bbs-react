import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PostList from './components/PostList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    // page === 'login' => 로그인 페이지
    // page === 'register' => 회원가입 페이지
    // page === 'post-list' => 게시물 목록 페이지
    this.state = {
      page: 'login'
    }
  }

  async componentDidMount(){

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
        ) : page === 'post-list' ? (
          <PostList />
        ) : null
      }
      </div>
    );
  }
}

export default App;
