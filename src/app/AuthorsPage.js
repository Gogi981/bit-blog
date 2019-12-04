import React from 'react'
import { Link } from 'react-router-dom'
import { getAuthorData } from '../services/authorServices'
import Loader from '../components/Loader'
import AuthorPosts from '../components/AuthorPosts'

class AuthorsPage extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true,
            authors: []
        }
    }
    componentDidMount() {
        getAuthorData("")
            .then(authors => this.setState({ authors, loading: false }))
    }


    render() {

        if (this.state.loading) { return <Loader /> }


        return (
            <div>
                <p>AUTHORS ({this.state.authors.length})</p>
                {this.state.authors.map(element => {
                    return (<p><Link to={"/author/" + element.id}> {element.name} </Link><AuthorPosts authorId={element.id} /></p>)
                })}

                This is a authors page
        </div>
        )
    }
}

export default AuthorsPage;