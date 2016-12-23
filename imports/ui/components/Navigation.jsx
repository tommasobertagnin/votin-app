import React, { Component } from 'react';

export default class Navigation extends Component {
  render () {
    return(
      <nav className="nav">
        <div className="nav-left">
          <p className="title is-2">VOTING APP</p>
        </div>

        <span className="nav-toggle">
          <span></span>
          <span></span>
          <span></span>
        </span>

        <div className="nav-right nav-menu">
          <a className="nav-item" href="#">
            Home
          </a>
          <a className="nav-item" href="#">
            Documentation
          </a>
          <a className="nav-item" href="#">
            Blog
          </a>
        </div>
      </nav>
    );
  }
}
