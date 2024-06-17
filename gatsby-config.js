/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
	pathPrefix: `/`,
	siteMetadata: {
		title: "Amerinide Partner LLC",
		titleTemplate: `Website Design and Development Agency`,
		description: `Amerinide Partner LLC specially built for Creative Agency, Corporate website, Portfolio website, Photographer, Personal Portfolio and all kinds of Personal Portfolio & Business and others. This Modern and Professional template offers Modern animation, Smooth Scrolling Animation sites etc.`,
		author: `@HowardWildey`,
		twitterUsername: `@HowardWildey`,
		image: 'bg-image-1.jpg',
		siteUrl: 'http://thern.rainbowit.net/',
		form_url: "https://getform.io/f/7a6695a7-c8e3-442c-bc2f-d46d3b9a535e",
		contact: {
			postal_code: '1400 Susan Ave Croydon <br/> Pennsylvania 19021 United States.',
			address: '1400 Susan Ave Croydon Pennsylvania 19021 United States.',
			email: 'h.wildey517@gmail.com',
			company_email: 'h.wildey517@gmail.com',
			company_address: '1400 Susan Ave Croydon Pennsylvania 19021 United States.',
			phone: '+1 (267) 225-1850',
			phone2: '+1 (267) 225-1850',
			social: {
				facebook: 'https://facebook.com',
				twitter: 'https://twitter.com',
				linkedin: 'https://linkedin.com',
				dribbble: 'https://dribbble.com'
			}
		},
		copyright: "The Amerinide Partner LLC. All Rights Reserved"
	},
	plugins: [
		`gatsby-plugin-styled-components`,
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,
		"gatsby-plugin-image",
		`gatsby-plugin-react-helmet`,
		`gatsby-transformer-json`,
		`gatsby-plugin-sitemap`,
		{
			resolve: `gatsby-plugin-manifest`,
			options: {
				name: `Thern`,
				short_name: `Thern`,
				start_url: `/`,
				background_color: `#333333`,
				theme_color: `#001c43`,
				display: `standalone`,
				"icons": [
					{
						"src": "/icons/icon-72x72.png",
						"sizes": "72x72",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-96x96.png",
						"sizes": "96x96",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-128x128.png",
						"sizes": "128x128",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-144x144.png",
						"sizes": "144x144",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-152x152.png",
						"sizes": "152x152",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-192x192.png",
						"sizes": "192x192",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-384x384.png",
						"sizes": "384x384",
						"type": "image/png"
					},
					{
						"src": "/icons/icon-512x512.png",
						"sizes": "512x512",
						"type": "image/png"
					}
				]
			},
		},
		{
			resolve: 'gatsby-plugin-robots-txt',
			options: {
				host: 'http://thern.rainbowit.net/',
				sitemap: 'http://thern.rainbowit.net/sitemap.xml',
				policy: [{ userAgent: '*', allow: '/' }]
			}
		},
		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 1920
						},
					},
				],
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/img/`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `${__dirname}/src/data/`,
			},
		},
		{
			resolve: `gatsby-plugin-google-analytics`,
			options: {
				// The property ID; the tracking code won't be generated without it
				trackingId: "UA-158680515-1",
				// Defines where to place the tracking script - `true` in the head and `false` in the body
				head: false,
				// Setting this parameter is optional
				anonymize: true,
				// Setting this parameter is also optional
				respectDNT: true,
				// Avoids sending pageview hits from custom paths
				exclude: ["/preview/**", "/do-not-track/me/too/"],
				// Delays sending pageview hits on route update (in milliseconds)
				pageTransitionDelay: 0,
				// Any additional optional fields
				sampleRate: 5,
				siteSpeedSampleRate: 10,
				cookieDomain: "example.com",
			},
		},
	]
}
