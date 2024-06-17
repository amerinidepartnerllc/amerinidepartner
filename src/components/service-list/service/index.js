import React from 'react'
import PropTypes from 'prop-types'
import { ServiceWrap } from './service.stc'

export const Service = ({ title, service_icon, desc, ...props }) => {
	return (
		<ServiceWrap {...props}>
			<div>
				<img src={service_icon} alt="Service" />
				<h6>{title}</h6>
				<p>{desc}</p>
			</div>
		</ServiceWrap>
	)
}

Service.propTypes = {
	image: PropTypes.oneOfType([
		PropTypes.string,
		PropTypes.object
	])
}
