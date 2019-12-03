import React from 'react'
import { Link } from 'react-router-dom'

const HomePage = () => {
    return (
        <div className="row home">
            <div className="col-12">

                <h1>Posts </h1>

                <Link to="/post">Title 1</Link>
                <p> As a user I want to look and feel how demo of my blog works. Before the real content is added, I want to b</p>
                <hr />

                <h3>Title 2</h3>
                <p> As a user I want to look and feel how demo of my blog works. Before the real content is added, I want to b</p>
                <hr />

                <h3>Title 3</h3>
                <p> As a user I want to look and feel how demo of my blog works. Before the real content is added, I want to b</p>
                <hr />

            </div>
        </div>

    )
}

export default HomePage;