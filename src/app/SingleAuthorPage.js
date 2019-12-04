import React from 'react'
import { Link } from 'react-router-dom'
import { getAuthorData } from '../services/authorServices'
import Loader from '../components/Loader'

class SingleAuthorPage extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            loading: true,
            author: {}
        }

    }
    componentDidMount() {

        getAuthorData(this.props.match.params.userId)
            .then((author) => this.setState({ author, loading: false }))
    }

    render() {

        if (this.state.loading) { return <Loader /> }
        const lat = this.state.author.address.geo.lat
        const lng = this.state.author.address.geo.lng
        return (
            <div>
                <Link to='/authors'> All authors</Link>
                <span>SingleAuthorPage</span>
                <br />
                <div>
                    <img src='../images/user.JPG' alt='imageplaceholder' />
                    <p>Name Surname: {this.state.author.name}</p>
                    <p>username: {this.state.author.username} </p>
                    <p>phone: {this.state.author.phone} </p>
                </div>
                <hr />
                <div>
                    <iframe
                        width="50%"
                        height="50%"
                        scrolling="no"
                        marginHeight="0"
                        marginWidth="0"
                        title={this.state.author.address.street}
                        frameBorder="0"
                        style={{ border: 0 }}
                        src={`https://maps.google.com/maps?q=${lat},${lng}&z=15&output=embed`}
                    />

                    <p> Address </p>
                    <p> street: {this.state.author.address.street} </p>
                    <p> city: {this.state.author.address.city}</p>
                    <p> zipcode: {this.state.author.address.zipcode}</p>
                    <hr />
                    <div>
                        <p>Company</p>
                        <p>name: {this.state.author.company.name}</p>
                        <p>slogan: {this.state.author.company.catchPhrase}</p>
                    </div>
                </div>
            </div >
        )
    }
}

export default SingleAuthorPage;