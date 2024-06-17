import React from "react"
import Seo from '../components/seo';
import Layout from '../containers/layout/layout'
import Hero from '../containers/home-particle/hero'
import Story from '../containers/home-particle/story'
import ProjectSection from '../containers/home-particle/project'
import TestimonialSection from '../containers/home-particle/testimonial'
import ClientSection from '../containers/home-particle/clients'
import VideoSection from '../containers/home-particle/video'
import BlogSection from '../containers/home-particle/blog'

const HomeParticlePage = () => (
	<Layout>
		<Seo title="Home" />
		<Hero />
		<Story />
		<ProjectSection />
		<TestimonialSection />
		<ClientSection />
	</Layout>
)

export default HomeParticlePage;