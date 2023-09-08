import React from 'react';
import PropTypes from 'prop-types';
import BodySection from './BodySection';
import './BodySectionWithMarginBottom.css';

class BodySectionWithMarginBottom extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='bodySectionWithMargin'>
                <BodySection {...this.props} />
            </div>
        )
    }
}

BodySectionWithMarginBottom.PropTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.element
    ])
}

export default BodySectionWithMarginBottom;
