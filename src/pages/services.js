import React from "react"
import Seo from '../components/seo';
import JoinOurTeam from "../containers/company/join-our-team";
import Layout from '../containers/layout/layout'
import Banner from '../containers/services/banner'
import OneService from "../containers/services/one-service";
import Process from "../containers/services/process";
import TechStacks from "../containers/services/tech-stacks";
import WhatWeDo from "../containers/services/whatwedo";

const ServicesPage = () => (
	<Layout>
		<Seo title="Services" />
		<Banner />
		<WhatWeDo />
		<OneService />
		<Process />
		<TechStacks />
		<JoinOurTeam />
	</Layout>
)

export default ServicesPage;