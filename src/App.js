import React, { Component } from 'react';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import './App.css';
import PostForm from './components/PostForm';

class App extends Component {
  constructor(props){
    super(props);
    // page === 'login' => 로그인 페이지
    // page === 'register' => 회원가입 페이지
    // page === 'post-list' => 게시물 목록 페이지
    // page === 'post-detail' => 게시물 세부 목록 페이지
    // page === 'post-form' => 게시물 세부 목록 페이지
    this.state = {
      page: 'post-list',
      // 현재 보고있는 게시물의 아이디
      postId: null,
      editMode: false
    }
  }
  handlePostListPage = () => {
    this.setState({
      page: 'post-list',
      editMode: false
    })
  }

  handlePostDetailPage = (id) => {
    this.setState({
      page: 'post-detail',
      postId: id
    })
  }

  handleRegisterPage = (e) => {
    e.preventDefault();
    this.setState({
      page: 'register'
    })
  }
  handlePostFormPage = () => {
    this.setState({
      page: 'post-form'
    })
  }
  handlePostEditPage = (postId) => {
    console.log('handlePostEditPage', postId);
    this.setState({
      page: 'post-form',
      editMode: true
    })
  }

  render() {
    const { page, postId, editMode } = this.state;
    return (
      <div className="App">
      {
        page === 'login' ? (
          <LoginForm onRegister={this.handleRegisterPage} />
        ) : page === 'register' ? (
          <RegisterForm />
        ) : page === 'post-list' ? (
          <PostList onPostDetailPage={this.handlePostDetailPage} onPostFormPage={this.handlePostFormPage}/>
        ) : page === 'post-detail' ? (
          <PostDetail postId={postId} onPostListPage={this.handlePostListPage} onPostEditPage={this.handlePostEditPage}/> 
        ) : page === 'post-form' ? (
          <PostForm editMode={editMode} postId={postId} onPostDetailPage={this.handlePostDetailPage} onPostListPage={this.handlePostListPage}/>
        ) : null
      }
      </div>
    );
  }
}

export default App;
