import React from 'react'
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import { LogoWrapper } from './logo.stc';

const Logo = (props) => {
	return (
		<LogoWrapper {...props}>
			<Link to="/" className="big-cursor">
				<StaticImage src="../../../assets/img/logo/rn-creative.png" alt="creative agency" className="white-logo" />
				<StaticImage src="../../../assets/img/logo/rn-creative-black.png" alt="creative agency" className="black-logo" />
			</Link>
		</LogoWrapper>
	)
}

export default Logo
