import React from 'react'
import Nav from "../navbarResponsive/Nav"
import NavbarContent from "../navbarResponsive/NavbarContent"
import NavbarBrand from "../navbarResponsive/NavbarBrand"
import NavbarHeader from "../navbarResponsive/NavbarHeader"
import NavbarLogo from "../navbarResponsive/NavbarLogo"
import HamburgerButton from "../navbarResponsive/HamburgerButton"

class Toolbar extends React.Component {

    render() {
        return (

            <Nav>
                <NavbarHeader>
                    <HamburgerButton/>
                    <NavbarLogo photo={"logo.png"}/>
                    <NavbarBrand brand={"Bin sports"}/>
                </NavbarHeader>
                <NavbarContent litem={this.props.litem}/>
            </Nav>
        )
    };
}

Toolbar.propTypes = {
    brand: React.PropTypes.string.isRequired,
    photo: React.PropTypes.string.isRequired,
    litem: React.PropTypes.array
};

export default Toolbar;