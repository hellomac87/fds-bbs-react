import React, { Component } from 'react';
import api from '../api';

class PostList extends Component {
    constructor(props){
        super(props);
        this.state = {
            posts: [],
            loading: false
        }
    }

    async componentDidMount(){
        this.setState({
            loading: true
        });
        const {data: posts} = await api.get('/posts');
        this.setState({
            posts,
            loading: false
        });
    }

    render() {
        const {posts, loading} = this.state;
        return (
            <div>
              <h1>게시물 목록</h1>
              <ul>
                  {
                      loading ? 'loading...' : (
                            posts.map((post, index) => (
                                <li key={post.id}>{post.title}</li>
                            ))
                      )
                  }
              </ul>
            </div>
        );
    }
}

export default PostList;