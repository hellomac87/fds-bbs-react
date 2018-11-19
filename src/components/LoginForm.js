import React, { Component, Fragment } from 'react';
import api from '../api';

class LoginForm extends Component {
    constructor(props){
        super(props);

        this.usernameRef = React.createRef();
        this.passwordRef = React.createRef();
    }

    componentDidMount(){
        this.usernameRef.current.focus();
    }

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
                    <input tyep="text" name="username" ref={this.usernameRef}/>
                    <input tyep="password" name="password" ref={this.passwordRef}/>
                    <button>login</button>
                </form>
                <button onClick={(e) => onRegister(e)}>register</button>
            </Fragment>
            
        );
    }
}

export default LoginForm;