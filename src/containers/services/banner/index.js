import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Image from '../../../components/image'

const Banner = () => {
	const bannerQueryData = useStaticQuery(graphql`
        query ServicesBannerQuery {
            pagedataJson(section: {eq: "services_page_data"}) {
				banner_img {
					childImageSharp {
					  	gatsbyImageData(layout: FULL_WIDTH, quality: 100, placeholder: TRACED_SVG)
					}
				}
            }
        }      
    `);
	const imageData = bannerQueryData.pagedataJson.banner_img;

	return (
		<div className="banner-area">
			<Image src={imageData} alt="Services Banner" />
		</div>
	)
}

export default Banner
