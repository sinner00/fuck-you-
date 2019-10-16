import React from "react";
import "./styles.scss";

const EditProfile = () => {
  return (
      <div className="edit-profile">
          <div className="edit-profile--upper-section">
              <h1 className="title">My Account</h1>
          </div>
          <div className="edit-profile--main-section">
              <h2 className="title"> Edit profile</h2>
              <div className="img-container">
                  <img className="img-container--img" src="https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50?s=200" alt=""/>
                  <span className="img-container--icon">
                      <i className="fas fa-plus"/>
                  </span>
              </div>
              <p className="text-center mt-3 subtitle">Profile picture</p>


          </div>
      </div>
  )
};

export default EditProfile;
