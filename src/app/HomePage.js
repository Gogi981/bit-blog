import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = (props) => {

    return (
        <div className="row home" >
            <div className="col-12">

                <h1>Posts </h1>

                {props.posts.map(element => {
                    let link = "/post/" + element.id
                    return (
                        <div>
                            <Link to={link}>{element.title[0].toUpperCase() + element.title.slice(1)}</Link>
                            <p> {element.body}</p>
                            <hr />
                        </div>
                    )
                }
                )
                }
            </div>
        </div>
    )
}


export default HomePage;