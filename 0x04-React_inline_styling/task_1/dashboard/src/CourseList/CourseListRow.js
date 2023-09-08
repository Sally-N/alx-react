import React from 'react';
import PropTypes from 'prop-types';

const headerStyle = {
	backgroundColor: '#deb5b545',
};

const normalRowStyle = {
	baclgroundColor: '#f5f5f5ab',
}

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
	return (
		<tr style={normalRowStyle}>
			{isHeader ? (
				textSecondCell === null ? (
					<th style={headerStyle} colSpan={2}>{textFirstCell}</th>
				) : (
					<>
						<th>{textFirstCell}</th>
						<th>{textSecondCell}</th>
					</>
				)
			) : (
				<>
					<td>{textFirstCell}</td>
					<td>{textSecondCell}</td>
				</>
			)}
		</tr>
	);
};

CourseListRow.PropTypes = {
    isHeader: PropTypes.bool,
    textFirstCell: PropTypes.string.isRequired,
    textSecondCell: PropTypes.string,
};

CourseListRow.defaultProps = {
    isHeader: false,
    textSecondCell: null,
};

export default CourseListRow
