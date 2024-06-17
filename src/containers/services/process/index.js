import React from 'react'
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import ProcessCard from '../../../components/process-card'
import { ProcessContent, ProcessSectionTitleDesc, ProcessSectionWrap, ProcessSectionTitle } from './process.stc'
import Heading from '../../../components/shared/heading'
import parse from 'html-react-parser'
import Text from '../../../components/shared/text'

const Process = ({ section, HeadingStyle }) => {
	const processQueryData = useStaticQuery(graphql`
        query ProcessDataQuery {
            processdataJson(section: {eq: "process-intro-content"}) {
                id
                title
                content
								featured_process {
									id
									title
									desc									
									image {
										publicURL
									}
								}
            }
        }      
    `)
	const processData = processQueryData.processdataJson;
	const { title, content, featured_process } = processData;

	return (
		<ProcessSectionWrap {...section}>
			<ProcessSectionTitleDesc className="row">
				{(title) && (
					<ProcessSectionTitle>
						{title && <Heading {...HeadingStyle}>{title}</Heading>}
					</ProcessSectionTitle>
				)}
				{content && (
					<div className="col-2 offset-1">
						<ProcessContent>
							<Text>{parse(content)}</Text>
						</ProcessContent>
					</div>
				)}
			</ProcessSectionTitleDesc>
			{
				featured_process && featured_process.map((process, i) => (
					<ProcessCard key={`process-card-${i}`} process={process} index={i} />
				))
			}
		</ProcessSectionWrap>
	)
}

Process.propTypes = {
	HeadingStyle: PropTypes.object,
	section: PropTypes.object
}

Process.defaultProps = {
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

export default Process
