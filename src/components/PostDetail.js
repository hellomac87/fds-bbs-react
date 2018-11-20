import React, { Component } from 'react';
import api from '../api';

class PostDetail extends Component {
    constructor(props){
        super(props);
        this.state = {
            post: null
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
        const {postId} = this.props;
        const { onPostListPage, onPostEditPage } = this.props;
        if(!post){
            return 'loading...'
        }
        return (
            <div>
                <h1>게시물 상세</h1>
                <h2>{post.title}</h2>
                <div>{post.body}</div>
                <button onClick={onPostListPage}>뒤로가기</button>
                <button onClick={() => onPostEditPage(postId)}>수정하기</button>
            </div>
        );
    }
}

export default PostDetail;