import React from "react";
import AdminCommerceTable from "./components";
import { Row, Col } from "react-bootstrap";
import "./styles.scss";
import { showModal } from "../../../../../store/actions/formActions";
import ModalTypes from "../../../../shared/components/Modal/modalTypes";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const AdminCommerce = ({ handleAddPostModal }) => (
  <React.Fragment>
    <div className="dashboard-section-container admin-commerce-container mt-5">
      <div className="dashboard-section-title-left mb-3">
        <div className="dashboard-section-title users-section-title mb-3">
            Premium Subscription Price
        </div>
        <div className="users-number-container d-flex justify-content-between">
          <h2 className="users-number-title admin-commerce-container--title">
            <i className="fas fa-euro-sign"/>
              50.00
          </h2>
          <div className="admin-commerce-container--title-right">
            <span>/month</span>
            <span>
              <i className="fas fa-book-open"/>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="dashboard-section-container pods-single-border mt-5">
      <div>
        <span className="pod-name users-section-title admin-commerce-container--credit-title">
            Credit Packages
          <div className="recent-blog-posts">+</div>
        </span>
      </div>
      <div className="blog-title-icons admin-commerce-container--icons-title">
        <i className="fas fa-list mr-4"/>
        <i className="fas fa-th-large admin-commerce-container--active"/>
      </div>
    </div>
    <div className="dashboard-section-container">
      <Row className="mt-4 admin-commerce-container--row mb-5">
        <Col md={3}>
          <div className="admin-commerce-container--package">

          </div>
        </Col>
        <Col md={3}>
          <div className="admin-commerce-container--package">

          </div>
        </Col>
        <Col md={3}>
          <div className="admin-commerce-container--package">

          </div>
        </Col>
        <Col md={3}>
          <div className="admin-commerce-container--package">

          </div>
        </Col>
      </Row>
    </div>
    <div className="dashboard-section-container pods-single-border mt-2 mb-1">
      <div>
        <span className="pod-name users-section-title admin-commerce-container--credit-title">
            Coupon Codes
          <div
            onClick={() => handleAddPostModal()}
            className="recent-blog-posts mb-1 admin-commerce-container--add-coupon"
          >
              +</div>
        </span>
      </div>
    </div>
    <div className="dashboard-section-container">
      <AdminCommerceTable/>
    </div>
  </React.Fragment>
);

const mapDispatchToProps = dispatch => ({
  handleAddPostModal: () => dispatch(showModal(ModalTypes.addCouponCodeForm.id)),
});

export default connect(
  null,
  mapDispatchToProps
)(AdminCommerce);


AdminCommerce.propTypes = {
  handleAddPostModal: PropTypes.func,
};
