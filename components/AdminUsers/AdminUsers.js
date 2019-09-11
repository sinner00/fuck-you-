import React, { useState } from "react";
import AdminUserTable from "./components/AdminUserTable";
import AdminUserSingle from "./components/AdminSingleUser";
import "./styles.scss";
import { marginL, userImg } from "./templateHelpers";
import PropTypes from "prop-types";


const AdminUsers = ({ handleInnerPage }) => {

  const [isToggled, handleToggle] = useState(false);
  const [isPodSingle, changeView] = useState(false);


  let zIndex = 199999;

  return (
    <React.Fragment>
      {
        isPodSingle
          ? <AdminUserSingle handleInnerPage={handleInnerPage} changeView={changeView} />
          : (
            <React.Fragment>
              <div className="dashboard-section-container mt-5">
                <div className="dashboard-section-title-left mb-3">
                  <div className="dashboard-section-title users-section-title mb-3">
                        Total Users
                  </div>
                  <div className="users-number-container">
                    <h2 className="users-number-title">
                          19,363,972
                    </h2>
                  </div>
                  <div className="d-flex align-items-center">
                    <div className="images_users__images mt-3">
                      {userImg.map(img => {
                        zIndex = zIndex - 10000;

                        return (<img
                          key={zIndex}
                          src={img.src}
                          alt="User images"
                          className="image"
                          style={{
                            marginLeft: marginL,
                            zIndex: zIndex
                          }}/>)
                      })}
                    </div>
                    <div className="ml-4">
                      <button className="view-more-btn mt-4">View All</button>
                    </div>
                  </div>
                </div>
                <div className="dashboard-section-title-right mb-3">
                  <div className="dashboard-section-title mb-3 right-section">
                        Activity Overview
                  </div>
                  <div className="admin-analytics-container">
                    <div className="admin-analytics-left">
                      <div className="text-uppercase dashboard-new-users-title mb-3">
                            new users
                      </div>
                      <div className="dashboard-admin-analytics">
                        <img
                          className="percents-arrow-down"
                          src={"/images/icanalyticup@2x.png"}
                          alt=""
                        />
                      </div>
                      <div className="text-center">
                        <button className="view-more-btn mt-4">View More</button>
                      </div>
                    </div>
                    <div className="admin-analytics-right">
                      <div className="text-uppercase dashboard-new-users-title mb-3">
                            new posts
                      </div>
                      <div className="dashboard-admin-analytics">
                        <img
                          className="percents-arrow-down"
                          src={"/images/icarrowdown.png"}
                          alt=""
                        />
                      </div>
                      <div className="text-center">
                        <button className="view-more-btn mt-4">View More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="dashboard-section-container users-middle-section  mb-4">
                <div className="users_list_title">Users List</div>
                <div>
                  <i className="fas fa-search float-right search-pods-icon search-users-icon"/>
                </div>
              </div>
              <div className="dashboard-section-container users-table-section  mt-3 mb-1">
                <AdminUserTable isToggled={isToggled} changeView={changeView} handleInnerPage={handleInnerPage}/>
              </div>
              <div className="text-center mb-5">
                <button
                  onClick={() => handleToggle(!isToggled)}
                  className="view-more-btn mt-4">
                  {!isToggled ? "Show More" : "Show Less"}
                </button>
              </div>

            </React.Fragment>
          )
      }
    </React.Fragment>
  );
};

AdminUsers.propTypes = {
  isToggled: PropTypes.bool,
  handleToggle: PropTypes.func,
  handleInnerPage: PropTypes.func
};


export default AdminUsers;
