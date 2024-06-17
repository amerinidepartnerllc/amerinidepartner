import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import { OneServiceCard, OneServiceSectionWrap, SectionTitle, SectionTitleDesc, WhatWeDoContent } from './one-service.stc'
import ServiceList, { Service } from '../../../components/service-list'
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'
import parse from 'html-react-parser'

const OneService = ({ HeadingStyle }) => {
	const servicesQueryData = useStaticQuery(graphql`
        query ServicesOneServiceDataQuery {
            servicesdataJson(section: {eq: "services-one-service-section-content"}) {
								title
								content
                featured_service {
                    id
                    title
										service_icon {
											publicURL
										}
                    desc
                }
            }
        }      
    `);
	const { title, content, featured_service } = servicesQueryData.servicesdataJson;
	const delay = [200];
	return (
		<OneServiceSectionWrap>
			<SectionTitleDesc className="row">
				{(title) && (
					<SectionTitle>
						{title && <Heading {...HeadingStyle}>{title}</Heading>}
					</SectionTitle>
				)}
				{content && (
					<div className="col-2 offset-1">
						<WhatWeDoContent>
							<Text>{parse(content)}</Text>
						</WhatWeDoContent>
					</div>
				)}
			</SectionTitleDesc>
			<OneServiceCard className='row'>
				<ServiceList>
					{featured_service && featured_service.map((service, i) => {
						delay.push(delay[i] + 200)
						return (
							<Service
								key={`service-${i}`}
								title={service.title}
								service_icon={service.service_icon.publicURL}
								desc={service.desc}
							/>
						)
					})}
				</ServiceList>
			</OneServiceCard>
		</OneServiceSectionWrap>
	)
}

OneService.propTypes = {
	HeadingStyle: PropTypes.object,
	TextStyle: PropTypes.object
}

OneService.defaultProps = {
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
	}
}

export default OneService;