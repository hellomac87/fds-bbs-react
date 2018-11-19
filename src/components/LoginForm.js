import React, { Component, Fragment } from 'react';
import api from '../api';

class LoginForm extends Component {
    handleSubmit = async (e) => {
        e.preventDefault();

        const username = e.target.elements.username.value;
        const password = e.target.elements.password.value;
        const res = await api.post('/users/login', {
            username,
            password
        });

        localStorage.setItem('token', res.data.token);
        // TODO: 게시글 목록 보여주기
    }
    render() {
        const {onRegister} = this.props;
        return (
            <Fragment>
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <h1>LoginForm</h1>
                    <input tyep="text" name="username" />
                    <input tyep="password" name="password" />
                    <button>login</button>
                </form>
                <button onClick={(e) => onRegister(e)}>register</button>
            </Fragment>
            
        );
    }
}

export default LoginForm;