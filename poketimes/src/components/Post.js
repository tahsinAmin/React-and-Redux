import React, { Component } from 'react'

class Post extends Component{
    state = {
        id: null
    }
    componentDidMount(){
        let id = this.props.match.params.post_id;
        this.setState({
            id
        });
    }
    render(){
        const { id } = this.state;
        return(
            <div className="container">
                <h4>{ id }</h4>
            </div>
        )
    }
}

export default Post
