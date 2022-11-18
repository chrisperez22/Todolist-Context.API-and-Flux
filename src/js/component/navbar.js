import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span className="navbar-brand mb-0 h1">Home Page</span>
      </Link>
      <div className="ml-auto">
        <Link to="/todo">
          <button className="btn btn-primary p-2 m-1">
            Todo List
          </button>
        </Link>
        
      </div>
    </nav>
  );
};
