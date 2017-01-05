/**
 * Created by Pablo on 5/1/2017.
 */
import React from 'react'

let HamburgerButton = React.createClass({
    render(){
        return(
            <button type="button" className="navbar-toggle" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#myNavbar" aria-expanded="false">
                <span className="icon-bar"/>
                <span className="icon-bar"/>
                <span className="icon-bar"/>
            </button>
        )
    }
});

export default HamburgerButton;