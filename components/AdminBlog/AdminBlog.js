import React from "react";
import { Row, Col } from "react-bootstrap";
import "./styles.scss";
import { showModal } from "../../../../../store/actions/formActions";
import ModalTypes from "../../../../shared/components/Modal/modalTypes";
import { connect } from "react-redux";
import PropTypes from "prop-types";


const AdminBlog = ({ handleAddPostModal }) => (
  <React.Fragment>
    <div className="dashboard-section-container pods-single-border mt-5">
      <div>
        <span className="pod-name">Recent Blog Posts
          <i className="fas fa-search float-right search-pods-icon"/>
        </span>
      </div>
      <div className="blog-title-icons">
        <i className="fas fa-list mr-4"/>
        <i className="fas fa-th-large"/>
      </div>
    </div>
    <div className="dashboard-section-container">
      <Row className="full-width-row mt-3 mb-5">
        <Col md={3} className="mb-4">
          <div className="admin-add-post text-center">
            <button onClick={() => handleAddPostModal()} className="admin-add-post--btn mb-3 mt-3">
              <i className="fas fa-plus-circle"/>
                Add New Post
            </button>
            <p>«Гамбургер» — устоявшееся название иконки, состоящей из трёх параллельных. </p>
          </div>
        </Col>
        <Col md={3} >
          <div className="admin-post">
            <div className="admin-post--img"/>
            <div className="mt-3 admin-post--description">
              <p>«Гамбургер» — устоявшееся название иконки, состоящей из трёх параллельных горизонтальных линий, </p>
            </div>
          </div>
        </Col>
        <Col md={3} >
          <div className="admin-post">
            <div className="admin-post--img"/>
            <div className="mt-3 admin-post--description">
              <p>«Гамбургер» — устоявшееся название иконки, состоящей из трёх параллельных горизонтальных линий, </p>
            </div>
          </div>
        </Col>
        <Col md={3} >
          <div className="admin-post">
            <div className="admin-post--img"/>
            <div className="mt-3 admin-post--description">
              <p>«Гамбургер» — устоявшееся название иконки, состоящей из трёх параллельных горизонтальных линий, </p>
            </div>
          </div>
        </Col>
        <Col md={3} >
          <div className="admin-post">
            <div className="admin-post--img"/>
            <div className="mt-3 admin-post--description">
              <p>«Гамбургер» — устоявшееся название иконки, состоящей из трёх параллельных горизонтальных линий, </p>
            </div>
          </div>
        </Col>
        <Col md={3} >
          <div className="admin-post">
            <div className="admin-post--img"/>
            <div className="mt-3 admin-post--description">
              <p>«Гамбургер» — устоявшееся название иконки, состоящей из трёх параллельных горизонтальных линий, </p>
            </div>
          </div>
        </Col>
        <Col md={3} >
          <div className="admin-post">
            <div className="admin-post--img"/>
            <div className="mt-3 admin-post--description">
              <p>«Гамбургер» — устоявшееся название иконки, состоящей из трёх параллельных горизонтальных линий, </p>
            </div>
          </div>
        </Col>
        <Col md={3}  >
          <div className="admin-post">
            <div className="admin-post--img"/>
            <div className="mt-3 admin-post--description">
              <p>«Гамбургер» — устоявшееся название иконки, состоящей из трёх параллельных горизонтальных линий, </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </React.Fragment>
);

const mapDispatchToProps = dispatch => ({
  handleAddPostModal: () => dispatch(showModal(ModalTypes.addAdminPostForm.id)),
});

export default connect(
  null,
  mapDispatchToProps
)(AdminBlog);


AdminBlog.propTypes = {
  handleAddPostModal: PropTypes.func,
};
