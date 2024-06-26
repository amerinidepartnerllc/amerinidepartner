import React from "react"
import Seo from '../components/seo';
import Layout from '../containers/layout/layout'
import Hero from '../containers/home-slider/hero'
import Story from '../containers/home-slider/story'
import ProjectSection from '../containers/home-slider/project'
import TestimonialSection from '../containers/home-slider/testimonial'
import ClientSection from '../containers/home-slider/clients'
import VideoSection from '../containers/home-slider/video'
import BlogSection from '../containers/home-slider/blog'

const HomeSliderPage = () => (
	<Layout>
		<Seo title="Home - Slider" />
		<Hero />
		<Story />
		<ProjectSection />
		<TestimonialSection />
		<ClientSection />
		<VideoSection />
		<BlogSection />
	</Layout>
)

export default HomeSliderPage;