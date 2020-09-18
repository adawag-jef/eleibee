import React from "react";
import PropTypes from "prop-types";

const AlertMessage = ({ msg }) => {
  return (
    <div>
      <p style={{ color: "red" }}>{msg}</p>
    </div>
  );
};

AlertMessage.propTypes = {
  msg: PropTypes.string.isRequired,
};

export default AlertMessage;
