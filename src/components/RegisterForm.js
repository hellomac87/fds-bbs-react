import React, { Component } from 'react';
import api from '../api';

class RegisterForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            username : '',
            password : '',
        }
    }
    handleFieldChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        });
        
    }
    handleSubmit = async(e) => {
        e.preventDefault();
        const {username, password} = this.state;
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
        console.log(this.state);
        const {username, password} = this.state;
        return (
            <form onSubmit={(e) => this.handleSubmit(e)}>
                <h1>RegisterForm</h1>
                <input type="text" name="username" onChange={(e) => this.handleFieldChange(e)} value={username}/>
                <input type="password" name="password" onChange={(e) => this.handleFieldChange(e)} value={password}/>
                <button>register</button>
            </form>
        );
    }
}

export default RegisterForm;