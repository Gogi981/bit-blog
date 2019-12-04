import React from 'react'
import { getAuthorPosts } from '../services/authorServices'

class AuthorPosts extends React.Component {
    constructor(props) {
        super(props)

        this.state = { posts: 0 }
    }



    componentDidMount() {
        getAuthorPosts(this.props.authorId)
            .then(posts => this.setState({ posts: posts.length }))
    }

    render() {
        return (
            <span> ({this.state.posts}- posts) </span>
        )

    }
}

export default AuthorPosts