import React from 'react'
import { Link } from 'react-router-dom'
import { getSinglePostData } from '../services/postServices'
import Loader from '../components/Loader'

class SinglePostPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            postData: {},
            loading: true
        }
    }

    componentDidMount() {
        this.loadPost()
    }

    loadPost = () => {
        getSinglePostData(this.props.match.params.id)
            .then(postData => this.setState({ postData, loading: false }))
    }

    render() {

        if (this.state.loading) {
            return <Loader />
        }

        return (
            <div className="row" >
                <div className="col">
                    <h1>{this.state.postData.title}</h1>
                    <Link to="/author/">{this.state.postData.userId}</Link>
                    <br />
                    <br />
                    <p>
                        {this.state.postData.body}
                    </p>

                    <h4> 3 more posts from same author</h4>
                    <p><Link to="/post">Title 10 - alkhfljanc</Link></p>
                    <p><Link to="/post">Title 11 - alkhfljanc</Link></p>
                    <p><Link to="/post">Title 12 - alkhfljanc</Link></p>
                    <hr />
                </div>
            </div>
        )
    }
}



export default SinglePostPage;