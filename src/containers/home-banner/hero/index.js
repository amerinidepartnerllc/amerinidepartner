import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import { getImage } from "gatsby-plugin-image"
import { convertToBgImage } from "gbimage-bridge"
import { HeroArea, HeroBg, ContentWrapper } from './hero.style';
import SlideContent from '../../../components/slide-content';

const Hero = () => {
	const heroQueryData = useStaticQuery(graphql`
		query HeroDataQuery {
			homedataJson(section: {eq: "hero_section_content"}) {
				title
				date
				desc
				bg_image {
					childImageSharp {
					  	gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: TRACED_SVG)
					}
				}
			}
		}  
  `);
	const heroData = heroQueryData.homedataJson;
	const imageData = heroData.bg_image;
	const image = getImage(imageData)
	const bgImage = convertToBgImage(image)

	return (
		<HeroArea overlay overlayColor="#000" opacity=".3">
			<HeroBg {...bgImage} />
			<ContentWrapper>
				<div className="content-bottom">
					<div className="col-4 offset-1">
						<SlideContent
							title={heroData.title}
							date={heroData.date}
							text={heroData.desc}
						/>
					</div>
				</div>
			</ContentWrapper>
		</HeroArea>
	)
}

export default Hero
