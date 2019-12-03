import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        <div className="row">
            <div className="col-9"></div>
            <div className="col-1"> <Link to="/">Home</Link></div>
            <div className="col-1"><Link to="/authors">Authors</Link></div>
            <div className="col-1"><Link to="/about">About</Link></div>
        </div >
    )
}
export default Menu