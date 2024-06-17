import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import {  TechStacksContent,  TechStacksSectionTitleDesc,  TechStacksSectionWrap,  TechStacksSectionTitle } from './tech-stacks.stc'
import parse from 'html-react-parser'
import Heading from '../../../components/shared/heading'
import Text from '../../../components/shared/text'

const TechStacks = ({ section, HeadingStyle }) => {
	const techStacksQueryData = useStaticQuery(graphql`
        query TechStacksDataQuery {
            servicesdataJson(section: {eq: "services-our-tech-stacks"}) {
                id
                title
                content								
								image {
									publicURL
								}
            }
        }      
    `)
	const techStacksData = techStacksQueryData.servicesdataJson;
	const { title, content, image } = techStacksData;

	return (
		<TechStacksSectionWrap {...section}>
			< TechStacksSectionTitleDesc className="row">
				{(title) && (
					< TechStacksSectionTitle>
						{title && <Heading {...HeadingStyle}>{title}</Heading>}
					</ TechStacksSectionTitle>
				)}
				{content && (
					<div className="col-2 offset-1">
						< TechStacksContent>
							<Text>{parse(content)}</Text>
						</ TechStacksContent>
					</div>
				)}
				{image &&
					<div className='col-4 offset-1'>
						<img src={image.publicURL} alt="tecStacks" />
					</div>
				}
			</TechStacksSectionTitleDesc>
		</TechStacksSectionWrap>
	)
}

TechStacks.propTypes = {
	HeadingStyle: PropTypes.object,
	section: PropTypes.object
}

TechStacks.defaultProps = {
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
	section: {
		backgroundColor: '#f8f8f8'
	}
}

export default TechStacks
