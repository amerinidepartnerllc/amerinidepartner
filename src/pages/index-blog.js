import React from "react"
import Seo from '../components/seo';
import Layout from '../containers/layout/layout'
import Hero from '../containers/home-blog/hero'
import FeatureBlogSection from '../containers/home-blog/feature-blog'
import BlogSection from '../containers/home-blog/blog'

const HomeBlogPage = () => (
	<Layout headerLayout={2}>
		<Seo title="Home - Blog" />
		<Hero />
		<FeatureBlogSection />
		<BlogSection />
	</Layout>
);

export default HomeBlogPage;
