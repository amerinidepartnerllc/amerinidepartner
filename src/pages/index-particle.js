import React from "react"
import Seo from '../components/seo';
import Layout from '../containers/preview/layout'
import Header from '../containers/preview/header'
import Footer from '../containers/preview/footer'
import Hero from '../containers/preview/hero'
import Demo from '../containers/preview/demo'

const PreviewPage = () => (
	<Layout>
		<Seo title="Home - Particle" />
		<Header />
		<main className="page-content">
			<Hero />
			<Demo />
		</main>
		<Footer />
	</Layout>
);

export default PreviewPage;
