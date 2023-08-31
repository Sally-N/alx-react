import React from "react";
import PropTypes from "prop-types";

function CourseListRow(props) {
  return (
    <tr>
      {props.isHeader ? (
        props.textSecondaryCell === null ? (
          <th colSpan={2}>{props.textFirstCell}</th>
	) : (
	  <>
	    <th>{props.textFirstCell}</th>
	    <th>{props.textSecondCell}</th>
	  </>
	)
      ) : (
	<>
	  <td>{props.textFirstCell}</td>
	  <td>{props.textSecondCell}</td>
	</>
      )}
    </tr>
  );
}

CourseListRow.propTypes = {
	  isHeader: PropTypes.bool,
	  textFirstCell: PropTypes.string.isRequired,
	  textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
	  isHeader: false,
	  textSecondCell: null,
};

export default CourseListRow;
