import React, { useEffect, useRef } from "react";
import { useAlert } from "react-alert";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Alerts = (props) => {
  const alert = useAlert();
  const didMountRef = useRef(false);

  useEffect(() => {
    if (didMountRef.current) {
      const error = props.error;
      if (error) {
        if (error.msg.user) alert.error(error.msg.user);
      }
    } else {
      didMountRef.current = true;
    }
  });

  return <div></div>;
};

const mapStateToProps = (state) => ({
  error: state.errors,
});

Alerts.propTypes = {
  error: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Alerts);
