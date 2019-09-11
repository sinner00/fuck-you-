import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";

const AdminPodsSingle = ({ changeView, handleInnerPage }) => (
  <React.Fragment>
    <div className="dashboard-section-container pods-single-border mt-5">
      <div>
        <button className="back-btn" onClick={() => { changeView(false), handleInnerPage(false) }}>
          <i className="fas fa-arrow-circle-left"/>
        </button>
        <span className="pod-name">Pod name</span>
        <span className="pods-number">8745 entries</span>
      </div>
      <div>
        <i className="fas fa-search float-right search-pods-icon"/>
      </div>
    </div>
  </React.Fragment>
);

export default AdminPodsSingle;


AdminPodsSingle.propTypes = {
  handleInnerPage: PropTypes.func,
  changeView: PropTypes.func,
};
