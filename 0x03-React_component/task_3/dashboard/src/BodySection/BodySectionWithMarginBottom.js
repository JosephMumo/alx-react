import React, {Component} from 'react';
import PropTypes from 'prop-types'
import BodySection from './BodySection';
import './BodySectionWithMargin.css';

class BodySectionWithMarginBottom extends Component {
    render() {
        <div className='bodySectionWithMargin'>
            <BodySection>{...this.props}</BodySection>
        </div>
    }
};
BodySectionWithMarginBottom.PropTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
};

export default BodySectionWithMarginBottom