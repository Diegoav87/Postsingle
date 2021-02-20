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
      const message = props.message;
      if (error) {
        if (error.msg.user) alert.error(error.msg.user);
        if (error.msg.username)
          alert.error(`Username: ${error.msg.username.join()}`);
        if (error.msg.password)
          alert.error(`password: ${error.msg.password.join()}`);
        if (error.msg.non_field_errors)
          alert.error(error.msg.non_field_errors.join());
      }
      if (message) {
        if (message.postAdded) alert.success(message.postAdded);
        if (message.postUpdated) alert.success(message.postUpdated);
      }
    } else {
      didMountRef.current = true;
    }
  });

  return <div></div>;
};

const mapStateToProps = (state) => ({
  error: state.errors,
  message: state.messages,
});

Alerts.propTypes = {
  error: PropTypes.object.isRequired,
  message: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(Alerts);
