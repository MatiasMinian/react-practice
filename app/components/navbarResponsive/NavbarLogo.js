/**
 * Created by Pablo on 5/1/2017.
 */
import React from 'react'

let NavbarLogo = React.createClass({
   render(){
       return(
           <a className="navbar-left" href="#"><img className="logo" src= {this.props.photo} alt=""/></a>
       )
   }
});

NavbarLogo.propTypes = {
    photo: React.PropTypes.string.isRequired
};

export default NavbarLogo;