import React from 'react'
import PropTypes from 'prop-types'
import SectionTitle from '../../components/shared/section-title'
import Text from '../../components/shared/text'
import { ProcessSection, ProcessInner, Content, ProcessImgWrap, ProcessImage } from './process-card.stc'
import { Controller, Scene } from 'react-scrollmagic'
import parse from 'html-react-parser'

const ProcessCard = ({ process, index, section, paragraph }) => {

	return (
		<ProcessSection {...section}>
			{(index % 2 === 0 ?
				<div className="row">
					<div className="col-1 offset-1">
						<div id="trigger" />
						<Controller>
							<Scene classToggle="animated" triggerElement="#trigger" triggerHook="onCenter">
								<ProcessImgWrap className="rn_surface story-image">
									<ProcessImage src={process.image.publicURL} />
								</ProcessImgWrap>
							</Scene>
						</Controller>
					</div>
					<div className="col-2 offset-1">
						<ProcessInner>
							<SectionTitle
								title={process.title}
							/>
							<Content>
								<Text {...paragraph}>{parse(process.desc)}</Text>
							</Content>
						</ProcessInner>
					</div>
				</div>
				:
				<div className="row">
					<div className="col-2 offset-1">
						<ProcessInner>
							<SectionTitle
								title={process.title}
							/>
							<Content>
								<Text {...paragraph}>{parse(process.desc)}</Text>
							</Content>
						</ProcessInner>
					</div>
					<div className="col-1 offset-1">
						<div id="trigger" />
						<Controller>
							<Scene classToggle="animated" triggerElement="#trigger" triggerHook="onCenter">
								<ProcessImgWrap className="rn_surface story-image">
									<ProcessImage src={process.image.publicURL} />
								</ProcessImgWrap>
							</Scene>
						</Controller>
					</div>
				</div>
			)}
		</ProcessSection>
	)
}

ProcessCard.propTypes = {
	paragraph: PropTypes.object,
	paragraphTwo: PropTypes.object,
	button: PropTypes.object,
	section: PropTypes.object,
	imageStyle: PropTypes.object
}

ProcessCard.defaultProps = {
	section: {
		backgroundColor: '#f8f8f8'
	},
	paragraph: {
		color: '#000000',
		fontSize: '14px',
		lineHeight: '26px'
	},
	paragraphTwo: {
		mt: '31px'
	},
	button: {
		mt: '34px'
	},
	imageStyle: {
		backgroundPosition: '-78px 0px'
	}
}

export default ProcessCard
