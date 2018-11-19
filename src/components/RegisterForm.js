import React, { Component } from 'react';
import api from '../api';

class RegisterForm extends Component {
    handleSubmit = async(e) => {
        e.preventDefault();
        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        // 사용자 이름 중복 체크 
        const {data: users} = await api.get('/users',{
           params: {
               username
           }
        });
        if (users.length > 0){
            alert('중복되는 아이디 존재');
            return;
        }
        const res = await api.post('/users/register', {
            username,
            password
        });
        localStorage.setItem('token', res.data.token);
        // TODO: 게시글 목록 보여주기
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h1>RegisterForm</h1>
                <input tyep="text" name="username" />
                <input tyep="password" name="password" />
                <button>register</button>
            </form>
        );
    }
}

export default RegisterForm;