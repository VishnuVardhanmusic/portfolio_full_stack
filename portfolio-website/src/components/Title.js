import React from "react";
import PropTypes from "prop-types";
import DummyImage from "../assets/dummy_image.png";

function Title(props) {
  const { name, leadText } = props;

  return (
    <div className="container">
      <div className="row text-center align-items-center my-5 py-5">
        <div className="col-12 col-md-6">
          <img
            className="img-fluid rounded-circle w-75"
            src={DummyImage}
            alt="your-namme"
          />
        </div>
        <div className="col-12 col-md-6 pt-5">
          <div className="font-weight-light" style={{ fontSize: "50px" }}>
            Hi, I am <span className="text-info"> {name}</span>
          </div>
          <h4 className="font-weight-light">{leadText}</h4>
        </div>
      </div>
    </div>
  );
}

Title.defaultProps = {
  name: "Manikumar P",
  leadText: "I'm a freelancer from India",
};

Title.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Title;
