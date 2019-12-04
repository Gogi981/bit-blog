import React from 'react'
import {Link} from 'react-router-dom'
import {getSinglePostData} from '../services/postServices'
import Loader from '../components/Loader'
import {getAuthorData,getAuthorPosts} from '../services/authorServices'

class SinglePostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postData: {},
            loading: true,
            authorData: null,
            authorDataLoad: true,
            authorPosts: [],
            authorPostsLoad: true
        }
    }

componentDidUpdate(){
    this.loadPost()
}

    componentDidMount() {
        this.loadPost()
    }

    loadPost = () => {
        getSinglePostData(this.props.match.params.id)
            .then(postData => {
                this.setState({
                    postData,
                    loading: false
                });
                getAuthorData(postData.userId).then(authorData => this.setState({
                    authorData,
                    authorDataLoad: false
                }));
                getAuthorPosts(postData.userId).then(authorPosts => this.setState({
                    authorPosts,
                    authorPostsLoad: false
                }))
            })
    }


    render() {
        const authorId = `author/:${this.state.postData.userId}`;
        const name = (this.state.authorDataLoad ? "loading":this.state.authorData.name)
        const posts = (this.state.authorPostsLoad ? []:this.state.authorPosts)
        if (this.state.loading) {return <Loader/>}

        return ( 
        <div className = "row" >
             <div className = "col">
                <Link to = {authorId}> {name} </Link> 
                <br/>
                <br/>
                <p> {this.state.postData.body} </p>

                <h4 > {posts.length} more posts from same author: </h4>
                {posts.map(e=> <p> <Link to = {`/post/${e.id}`} > {`${e.title} - ${e.body.slice(0,20)}`} </Link></p>)}
                <hr/>
            </div>
        </div>
        )
    }
}

export default SinglePostPage