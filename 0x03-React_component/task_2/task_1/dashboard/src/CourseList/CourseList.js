import React from 'react';
import './CourseList.css';
import CourseListRow from './CourseListRow';
import CourseShape from './CourseShape';
import PropTypes from 'prop-types';

const CourseList = ({ listCourses }) => {
  return (
    <table className='course-list'>
      <thead>
        <CourseListRow textFirstCell='Available courses' isHeader={true} />
        <CourseListRow
          textFirstCell='Course name'
          textSecondCell='Credit'
          isHeader={true}
        />
      </thead>
      <tbody>
	{listCourses.length === 0 ? (
	  <CourseListRow isHeader={false} textFirstCell='No course available yet' />  :
	) : (
	  listCourses.map((course) => (
            <CourseListRow key={course.id} textFirstCell={course.name} textSecondCell={course.credit} isHeader={false} /> 
	  ));
        })  
      </tbody>
    </table>
  );
};

CourseList.propTypes = {
  listCourses: propTypes.arrayOf(CourseShape);
}

CourseList.defaultProps = {
  listCourses: [],
}

export default CourseList;
