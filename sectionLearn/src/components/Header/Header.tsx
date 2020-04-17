import React from 'react'
import { NavLink } from 'react-router-dom'

export const Header = () => {
    return (
        <div className="header_container">
            <div className="header_box_outer">
                <div className="header_box_inner">
                    <nav className="header_box_nav_container">
                        <div className="header_box_nav_list">
                            <div className="header_box_nav_item">
                                <NavLink className="header_box_nav_link" activeClassName="active_nav" to="/" exact>Home</NavLink>
                            </div>
                            <div className="header_box_nav_item">
                                <NavLink className="header_box_nav_link" activeClassName="active_nav" to="/about">About</NavLink>
                            </div>
                            <div className="header_box_nav_item">
                                <NavLink className="header_box_nav_link" activeClassName="active_nav" to="/contact">Contact</NavLink>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}
