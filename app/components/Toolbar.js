import React from 'react'
import MediaQuery from 'react-responsive'

let Toolbar = React.createClass({
    render(){
        return(

            <nav className="navbar navbar-default navbar-fixed-top">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse"   data-target="#myNavbar">>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                            <span className="icon-bar"/>
                        </button>
                        <a className="navbar-left" href="#"><img className="logo" src= {this.props.photo} alt=""/></a>
                        <a className="navbar-brand" href="#">{this.props.brand}</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav navbar-right">
                            {this.props.litem.map((item) =>  <li key={item.url}><a href = {item.url} > {item.name} </a> </li>)}
                        </ul>
                </div>
            </nav>




                )
    }
    }

);

Toolbar.propTypes = {
    brand: React.PropTypes.string.isRequired,
    photo: React.PropTypes.string.isRequired,
    litem: React.PropTypes.array
};

export default Toolbar;