import React from "react";
import PropTypes from "prop-types";

function CourseShape(props) {

}

CourseShape.propTypes = {
    id: propTypes.number.isRequired;
    name: propTypes.string.isRequired;
    credit: propTypes.number.isRequired;

}

export default CourseShape;
