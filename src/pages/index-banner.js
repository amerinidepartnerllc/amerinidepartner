import React from "react"
import Seo from '../components/seo';
import Layout from '../containers/layout/layout'
import Hero from '../containers/home-banner/hero'
import Story from '../containers/home-banner/story'
import ProjectSection from '../containers/home-banner/project'
import TestimonialSection from '../containers/home-banner/testimonial'
import ClientSection from '../containers/home-banner/clients'
import VideoSection from '../containers/home-banner/video'
import BlogSection from '../containers/home-banner/blog'

const HomeBannerPage = () => (
	<Layout>
		<Seo title="Home" />
		<Hero />
		<Story />
		<ProjectSection />
		<TestimonialSection />
		<ClientSection />
		<VideoSection />
		<BlogSection />
	</Layout>
)

export default HomeBannerPage;