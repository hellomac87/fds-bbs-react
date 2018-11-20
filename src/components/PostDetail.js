import React, { Component } from 'react';
import api from '../api';

class PostDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: {}
        }
    }
    async componentDidMount(){
        const id = this.props.postId;
        const {data: post} = await api.get(`/posts/${id}`);
        this.setState({
            post: post
        })
    }
    render() {
        const {post} = this.state;
        return (
            <div>
                <h1>게시물 목록</h1>
                <div>{post.title}</div>
                <div>{post.body}</div>
            </div>
        );
    }
}

export default PostDetail;