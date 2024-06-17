import React from 'react';
import {Link} from 'gatsby';
import {FooterMenuWrap, FooterMenuList} from './footer-menu.stc'

const FooterMenu = () => {
    return (
        <FooterMenuWrap>
            <FooterMenuList>
                <Link to="/" className="no-cursor">Home</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/services" className="no-cursor">SERVICES</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/project" className="no-cursor">Project</Link>
            </FooterMenuList>
            <FooterMenuList>
                <Link to="/contact" className="no-cursor">Contact Us</Link>
            </FooterMenuList>
        </FooterMenuWrap>
    )
}

export default FooterMenu;