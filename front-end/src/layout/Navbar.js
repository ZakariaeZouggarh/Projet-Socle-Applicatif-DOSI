import React from "react";
import { Link } from "react-router-dom";
import { FaPlusCircle } from 'react-icons/fa';

export default function Navbar(){
  return (
      <div>
        <nav className="navbar navbar-expand-lg navbar navbar-light">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">Gestion d'utilisateurs</a>
            <button
                className="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

          </div>
        </nav>
      </div>
  )
}