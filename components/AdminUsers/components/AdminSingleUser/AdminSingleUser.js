import React from "react";
import PropTypes from "prop-types";

const AdminSingleUser = ({ changeView, handleInnerPage }) => (
  <React.Fragment>
    <div className="dashboard-section-container pods-single-border mt-5">
      <div>
        <button className="back-btn" onClick={() => { changeView(false), handleInnerPage(false) }}>
          <i className="fas fa-arrow-circle-left"/>
        </button>
        <span className="pod-name">Firstname Lastname</span>
      </div>

    </div>
  </React.Fragment>
);

export default AdminSingleUser;


AdminSingleUser.propTypes = {
  handleInnerPage: PropTypes.func,
  changeView: PropTypes.func,
};
