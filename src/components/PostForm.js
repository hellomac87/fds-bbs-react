import React, { Component } from 'react';
import api from '../api';

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            title: '',
            body: '',
        }
    }
    async componentDidMount(){
        if (this.props.editMode){
            const {data: {title, body}} = await api.get(`/posts/${this.props.postId}`);
            this.setState({
                title,
                body
            })
        }
    }
    handleSubmit = async (e) => {
        e.preventDefault();
        const { title, body } = this.state;
        let postId;
        if (this.props.editMode){
            const { data } = await api.patch(`/posts/${this.props.postId}`, {
                title,
                body
            });
            postId = data.id;
        }else{
            const { data } = await api.post('/posts', {
                title,
                body
            });
            postId = data.id;
        }

        this.props.onPostDetailPage(postId)
        
        
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
        const { onPostListPage, editMode } = this.props;
        return (
            <div className="post-form">
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <h1>postForm</h1>
                    <input type="text" name="title" value={title} onChange={(e) => this.handleInputChange(e)} placeholder="title" />
                    <textarea type="text" name="body" value={body} onChange={(e) => this.handleInputChange(e)} placeholder="body" />
                    {
                        editMode ? (
                            <button>수정하기</button>
                        ) : (
                            <button>작성하기</button>
                        )
                    }

                </form>
                
                <button onClick={onPostListPage}>뒤로가기</button>
            </div>
        );
    }
}

export default PostForm;