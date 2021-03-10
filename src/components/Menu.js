import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

const Menu = (props) => (
    <nav id="menu">
        <div className="inner">
            <ul className="links">
                <li><Link onClick={props.onToggleMenu} to="/">Home</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/blog">Blog</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/membership">Membership</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/outreach">Outreach</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/tour">Tour</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/videos">Videos</Link></li>
                <li><Link onClick={props.onToggleMenu} to="/social-media">Connect</Link></li>
            </ul>
            <ul className="actions vertical">
                <li><a href="/visit" className="button special fit">Visit</a></li>
                <li><a onClick={e => { e.preventDefault(); window.open('https://locomotivehouse.com', '_blank'); }} href="https://locomotivehouse.com" className="button fit">Member Log In</a></li>
            </ul>
        </div>
        <a className="close" onClick={props.onToggleMenu} href="javascript:;">Close</a>
    </nav>
)

Menu.propTypes = {
    onToggleMenu: PropTypes.func
}

export default Menu
