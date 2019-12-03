import React from 'react'
import { Link } from 'react-router-dom'


const Menu = () => {
    return (
        <div className="row">
            <div className="col-9"></div>
            <div className="col-1"> <Link>Home</Link></div>
            <div className="col-1"><Link>Authors</Link></div>
            <div className="col-1"><Link>About</Link></div>
        </div >
    )
}
export default Menu