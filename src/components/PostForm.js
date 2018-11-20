import React, { Component } from 'react';
import api from '../api';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        const {title, body} = this.state;
        const {data} = await api.post('/posts',{
            title,
            body
        });
        this.props.onPostDetailPage(data.id)
    }
    handleInputChange = (e) => {
        const value = e.target.value;
        const name = e.target.name;
        this.setState({
            [name]: value
        })
    }

    render() {
        console.log(this.state);
        const {title, body} = this.state;
        
        return (
            <form onSubmit={(e) => this.handleSubmit(e)} className="post-form">
                <h1>postForm</h1>
                <input type="text" name="title" value={title} onChange={(e)=> this.handleInputChange(e)}placeholder="title"/>
                <input type="text" name="body" value={body} onChange={(e)=> this.handleInputChange(e)}placeholder="body"/>
                <button>write</button>
            </form>
        );
    }
}

export default PostForm;