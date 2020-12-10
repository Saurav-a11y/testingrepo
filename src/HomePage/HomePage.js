import React from "react";
import { connect } from "react-redux";
import "./HomePage.css";

const HomePage = ({
  pannelToggle,
  pannelRezise,
  pannelFullWidth,
  fetchItems,
}) => {
  return (
    <div className="home-page">
      <div
        className={
          pannelFullWidth === true ? "resize-fullwidth-pannel" : "left-pannel"
        }
      ></div>
      {pannelToggle === false || pannelFullWidth === true ? null : (
        <div
          className={
            pannelRezise === true ? "resize-width-pannel" : "right-pannel"
          }
        ></div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pannelToggle: state.pannel.hidden,
  pannelRezise: state.pannel.pannelWidth,
  pannelFullWidth: state.pannel.pannelFullWidth,
});

export default connect(mapStateToProps)(HomePage);
