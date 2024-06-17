import React from 'react';
import PropTypes from 'prop-types';
import {Service} from './service'
import {ServiceListWrap} from './service-list.stc'

const ServiceList = ({children}) => {
    return <ServiceListWrap className='col-4 offset-1'>{children}</ServiceListWrap>
}

ServiceList.propTypes = {
    children: PropTypes.node.isRequired
}

export {Service};

export default ServiceList;