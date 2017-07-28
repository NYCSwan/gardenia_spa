import React from "react";
import { auth } from "./firebase";
import PropTypes from "prop-types";
import "./CurrentUser.css";

// user gets passed into CurrentUserU from App.react
const CurrentUser = ({ user }) =>
  <div className="CurrentUser">
    <img className="CurrentUser-photo" alt={user.displayName} />
    <div className="CurrentUser-identification">
      <h3>
        {user.displayName}
      </h3>
    </div>
  </div>;

CurrentUser.propTypes = {
  user: PropTypes.shape({
    displayName: PropTypes.string,
  }),
};

export default CurrentUser;
