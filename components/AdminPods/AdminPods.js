import React, { useState } from "react";
import "./styles.scss";
import { AdminPodsSingle, AdminPodsMain } from "./components";
import PropTypes from "prop-types";


const AdminPods = ({ handleInnerPage }) => {

  const [visibilitis, changeVisibilitis] = useState([]);
  const [isPodSingle, changeView] = useState(false);

  const checkVisibility = index => (
    visibilitis.findIndex(visibilityItem => visibilityItem.index === index) !== -1
  );


  const toggleVisibilitis = index => {
    const isVisible = checkVisibility(index);

    let newVisibilities = null;
    if (isVisible) newVisibilities = visibilitis.filter(visibilityItem => visibilityItem.index !== index);
    else newVisibilities = [...visibilitis, { index: index }];

    changeVisibilitis(newVisibilities);
  };

  const handleShowVisibility = index => {
    const isVisible = checkVisibility(index);
    if (!isVisible) return null;

    return (
      <span className="hidden_visibility"><i className="fas fa-low-vision"/>HIDDEN</span>
    )
  };

  const props = {
    changeView,
    handleShowVisibility,
    toggleVisibilitis,
    handleInnerPage
  };

  return (
    <React.Fragment>
      {
        isPodSingle
          ? <AdminPodsSingle {...props}/>
          : <AdminPodsMain {...props}/>
      }


    </React.Fragment>
  )
};

export default AdminPods;

AdminPods.propTypes = {
  handleInnerPage: PropTypes.func
};
