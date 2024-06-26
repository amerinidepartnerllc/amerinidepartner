import React from 'react';
import PropTypes from 'prop-types'
import { useStaticQuery, graphql } from "gatsby"
import SectionTitle from '../../../components/shared/section-title'
import Blog from '../../../components/blog/layout-two'
import { BlogSectionWrap, BlogInner } from './feature-blog.stc'

const BlogSection = ({ section }) => {
	const blogQueryData = useStaticQuery(graphql`
        query BlogHomeFeatureBlogQuery {
            homeblogdataJson(section: {eq: "blog_feature_blog_section"}) {
                title
                subtitle
            }
            allMarkdownRemark(
                filter: {frontmatter: {is_featured: {eq: true}}}, 
                limit: 2, sort: {order: DESC, fields: frontmatter___date}) {
                edges {
					node {
						fields {
							slug
						}
						frontmatter {
							title
							date(formatString: "MMM Do, YYYY")
							author
							id
							shortDesc
							image {
								childImageSharp {
									gatsbyImageData(width: 600, height: 315, layout: CONSTRAINED, quality: 100, placeholder: TRACED_SVG)
								}
							}
						}
					}
                }
            }
        }
    `);
	const blogSecData = blogQueryData.homeblogdataJson;
	const blogs = blogQueryData.allMarkdownRemark.edges;
	return (
		<BlogSectionWrap {...section}>
			<div className="col-1 offset-1">
				<SectionTitle
					title={blogSecData.title}
					subtitle={blogSecData.subtitle}
				/>
			</div>
			<BlogInner className="col-4 offset-1">
				<div className="row">
					{blogs.map((blog, i) => (
						<div className="col-2" key={`${blog.node.fields.slug}-${i}`}>
							<Blog
								title={blog.node.frontmatter.title}
								date={blog.node.frontmatter.date}
								author={blog.node.frontmatter.author}
								id={blog.node.frontmatter.id}
								path={blog.node.fields.slug}
								excerpt={blog.node.frontmatter.shortDesc}
								image={blog.node.frontmatter.image}
							/>
						</div>
					))}
				</div>
			</BlogInner>
		</BlogSectionWrap>
	)
}

BlogSection.propTypes = {
	section: PropTypes.object
}

BlogSection.defaultProps = {
	section: {
		backgroundColor: '#f8f8f8'
	},
}

export default BlogSection;