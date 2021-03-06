import React, {Component} from 'react';
import axios from 'axios';

class Post extends Component {
  state = {
    id: null
  }
  componentDidMount(){
    let id = this.props.match.params.post_id;
    axios.get('https://jsonplaceholder.typicode.com/posts/' + id)
    .then(res => {
      this.setState({
        post: res.data
      })
    })
    this.setState({
      id
    })
  }
  render(){
    const post = this.state.post ? (
      <div className="post">
        <div className="center">
          <h4>{this.state.post.title}</h4>
          <p>{this.state.post.body}</p>
        </div>
      </div>
    ) : (
      <div className="center">
        Loading post...
      </div>
    )
    return (
      <div className="container">
          {post}
      </div>
    )
  }
}

export default Post