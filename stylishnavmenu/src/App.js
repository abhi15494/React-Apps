import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

function App() {
  return (
    <Navbar>
      <NavItem icon={"fa-address-book"} />
      <NavItem icon={"fa-caret-down"} >
        {/* DROPDOWN GOES THERE */}
        <DropdownMenu />
      </NavItem>
      <NavItem icon={"fa-grav"} />
      <NavItem icon={"fa-adjust"} />
      <NavItem icon={"fa-ravelry"} />
    </Navbar>
  )
}

function Navbar(props) {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        {props.children}
      </ul>
    </nav>
  )
}

function NavItem(props) {
  const [open, setopen] = useState(false);

  return <li className="nav-item">
    <a href="#" className="icon-button" onClick={() => setopen(!open)}>

      <i className={"fa " + props.icon} aria-hidden="true"></i>
    </a>

    {open && props.children}
  </li>
}

function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState('main');
  const [menuheight, setmenuheight] = useState(null);

  function calcHeight(el) {
    const height = el.offsetHeight;
    console.log(height)
    setmenuheight(height);
  }

  function DropdownItem(props) {
    return <a className="menu-item" href="#" onClick={() => props.gotomenu && setActiveMenu(props.gotomenu)}>
      <span className="icon-button">
        <i className={"fa " + props.lefticon} aria-hidden="true"></i>
      </span>
      {props.children}
    </a>
  }

  return <div className="dropdown" style={{ height: menuheight }}>
    <CSSTransition
      in={activeMenu === "main"}
      unmountOnExit
      timeout={500}
      classNames="menu-primary"
      onEnter={calcHeight}
    >
      <div className="menu">
        <DropdownItem gotomenu="settings" lefticon="fa-arrow-right">More Menus</DropdownItem>
        <DropdownItem lefticon="fa-bars">Menu 2</DropdownItem>
        <DropdownItem lefticon="fa-arrows">Menu 3</DropdownItem>
      </div>
    </CSSTransition>
    <CSSTransition
      in={activeMenu === "settings"}
      unmountOnExit
      timeout={500}
      classNames="menu-secondary"
      onEnter={calcHeight}
    >
      <div className="menu">
        <DropdownItem gotomenu="main" lefticon="fa-arrow-left"></DropdownItem>
        <DropdownItem lefticon="fa-bars">Setting menu 2</DropdownItem>
        <DropdownItem lefticon="fa-arrows">Setting menu 3</DropdownItem>
        <DropdownItem lefticon="fa-arrows">Setting menu 4</DropdownItem>
        <DropdownItem lefticon="fa-arrows">Setting menu 5</DropdownItem>
      </div>
    </CSSTransition>
  </div>
}

export default App;
