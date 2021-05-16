import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Logo from '../components/icons/Logo'

const Header = (props) => (
    <header id="header" className="alt">
        <Link to="/" className="logo"><Logo /></Link>
        <nav>
            <button className="menu-link" onClick={props.onToggleMenu}><span>Menu</span></button>
        </nav>
    </header>
)

Header.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Header
