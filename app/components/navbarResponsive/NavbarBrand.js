/**
 * Created by Pablo on 5/1/2017.
 */
import React from 'react'

let NavbarBrand = React.createClass({
    render(){
        return(
        <a className="navbar-brand" href="#">{this.props.brand}</a>
        )
    }
});
NavbarBrand.propTypes = {
  brand: React.PropTypes.string.isRequired
};

export default NavbarBrand;