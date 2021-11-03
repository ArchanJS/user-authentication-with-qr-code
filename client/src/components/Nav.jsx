import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <NavLink className="navbar-brand" exact to='/' >User Auth</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
              <NavLink className="nav-link" exact to='/reader'>QR Reader</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to='/generator'>QR Generator</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" exact to='/'>Register</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
        </>
    )
}

export default Nav
