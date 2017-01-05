/**
 * Created by Pablo on 5/1/2017.
 */
import React from 'react'

let Nav = React.createClass({
    render(){
        return(
            <nav className="navbar navbar-default navbar-fixed-top binNav ">
                <div className="container-fluid ">
                    {this.props.children}
                </div>
            </nav>
        )
    }

    });

export default Nav;