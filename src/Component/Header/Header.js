import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  pannelFullWidth,
  pannelRezise,
  togglePannel,
} from "../../Redux/Panel/panelAction";

const Header = ({ togglePannel, pannelRezise, pannelFullWidth }) => {
  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <span className="glyphicon glyphicon-envelope"></span>
      </Link>
      <div className="options">
        <div className="top-option">
          <Link className="option" to="/">
            <span className="text"> help </span>
            <span className="glyphicon glyphicon-question-sign"></span>
          </Link>
          <Link className="option" to="/">
            <span className="glyphicon glyphicon-bell"></span>
          </Link>
          <Link className="option" to="/">
            <span className="glyphicon glyphicon-user"></span>
          </Link>
        </div>
        <div className="low-option">
          <Link className="option" to="/" onClick={pannelFullWidth}>
            <span className="glyphicon glyphicon-resize-full"></span>
          </Link>
          <Link className="option" to="/" onClick={togglePannel}>
            <span className="glyphicon glyphicon-remove"></span>
          </Link>
          <Link className="option" to="/" onClick={pannelRezise}>
            <span className="glyphicon glyphicon-resize-small"></span>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default connect(null, { pannelRezise, togglePannel, pannelFullWidth })(
  Header
);
