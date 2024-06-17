import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql, Link } from "gatsby"
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import { WhatWeDoSectionWrap, SectionTitle, WhatWeDoContent, ProjectTypeList } from './whatwedo.stc'
import parse from 'html-react-parser'
import Button from '../../../components/shared/button'

const WhatWeDo = ({ HeadingStyle, TextStyle, ProjectTypeHeading, ProjectTypeText, buttonStyle }) => {
	const servicesQueryData = useStaticQuery(graphql`
        query ServicesDataQuery {
            servicesdataJson(section: {eq: "services-intro-content"}) {
                id
                title
                desc
                content
            }
						aboutdataJson(section: {eq: "about-intro-content"}) {
								featured_work {
										id
										title
										achivments
								}
						}
        }      
    `);
	const { title, desc, content } = servicesQueryData.servicesdataJson;
	const { featured_work } = servicesQueryData.aboutdataJson;
	const delay = [200];
	return (
		<WhatWeDoSectionWrap>
			<div className="row">
				{(title || desc) && (
					<div className="col-1 offset-1">
						<SectionTitle>
							{title && <Heading {...HeadingStyle}>{title}</Heading>}
							{desc && <Text {...TextStyle}>{desc}</Text>}
						</SectionTitle>
					</div>
				)}
				{content && (
					<div className="col-2 offset-1">
						<WhatWeDoContent>
							<Text>{parse(content)}</Text>
						</WhatWeDoContent>
						<Button as={Link} to="/contact" {...buttonStyle}>Get in touch</Button>
					</div>
				)}
			</div>
			{featured_work && (
				<div className="row section-pt-md">
					<div className="col-4 offset-1">
						<div className="content row">
							{featured_work.map((work, i) => {
								delay.push(delay[i] + 200)
								return (
									<div
										key={work.id}
										className="col-1 project-type wow fadeInLeft"
										data-wow-delay={`${delay}ms`}
										data-wow-duration="1000ms">
										{work.title && <Heading {...ProjectTypeHeading}>{work.title}</Heading>}
										{work.achivments && (
											<ProjectTypeList>
												{work.achivments.map((achiv, i) => (
													<Text key={`${work.id}-${i}`} {...ProjectTypeText}>{achiv}</Text>
												))}
											</ProjectTypeList>
										)}
									</div>
								)
							})}
						</div>
					</div>
				</div>
			)}
		</WhatWeDoSectionWrap>
	)
}

WhatWeDo.propTypes = {
	HeadingStyle: PropTypes.object,
	TextStyle: PropTypes.object,
	buttonStyle: PropTypes.object
}

WhatWeDo.defaultProps = {
	HeadingStyle: {
		fontSize: '40px',
		texttransform: 'capitalize',
		lineHeight: '55px',
		color: 'primary',
		fontweight: 600,
		responsive: {
			medium: {
				fontSize: '24px',
				lineHeight: 'initial'
			},
			small: {
				fontSize: '25px',
				lineHeight: '35px'
			}
		}
	},
	TextStyle: {
		lineHeight: '26px'
	},
	ProjectTypeHeading: {
		as: 'h6',
		color: 'primary',
		fontSize: '32px',
		fontweight: 700,
		letterspacing: '2px',
		mb: '12px',
		responsive: {
			medium: {
				fontSize: '20px',
				lineHeight: 'initial'
			},
			small: {
				fontSize: '18px',
				lineHeight: '35px'
			}
		}
	},
	ProjectTypeText: {
		m: 0,
		fontSize: '14px',
		color: '#000000',
		letterspacing: '1px'
	},
	buttonStyle: {
		mt: '34px'
	}
}

export default WhatWeDo;