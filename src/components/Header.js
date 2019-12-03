import React from 'react'
import Logo from './Logo'
import Menu from './Menu'

const Header = () => {
    return (
        <div className="row header">
            <div className="col-6">
                <Logo />
            </div>
            <div className="col-6">
                <Menu />
            </div>
        </div>
    )
}

export default Header;