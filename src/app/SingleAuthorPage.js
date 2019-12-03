import React from 'react'
import { Link } from 'react-router-dom'

const SingleAuthorPage = () => {
    return (
        <div>
            <Link to='/authors'> All authors</Link>
            <span>SingleAuthorPage</span>
            <br />
            <div>
                <img src='../images/user.JPG' alt='imageplaceholder' />
                <p>Name Surname</p>
                <p>username: </p>
                <p>phone: </p>
            </div>
            <hr />
            <div>
                <iframe />
                <p> Address </p>
                <p> street: </p>
                <p> city: </p>
                <p> zipcode: </p>
                <hr />
                <div>
                    <p>Company</p>
                    <p>name:</p>
                    <p>slogan:</p>
                </div>
            </div>
        </div>
    )
}

export default SingleAuthorPage;