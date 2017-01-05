/**
 * Created by Pablo on 5/1/2017.
 */
import React from 'react'

let NavbarHeader = React.createClass({
    render(){
        return(
            <div className="navbar-header">
                {this.props.children}
            </div>
        )
    }
});

export default NavbarHeader;