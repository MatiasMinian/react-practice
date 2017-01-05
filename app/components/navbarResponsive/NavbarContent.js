/**
 * Created by Pablo on 5/1/2017.
 */
import React from 'react'

let Item = React.createClass({
    render(){
        return(
            <li> <a  className="binNav-item" href = {this.props.url} > {this.props.name} </a></li>
        )}
});

Item.propTypes = {
    url: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired
};

let NavbarContent = React.createClass({
    render(){
        return(
        <div className="collapse navbar-collapse" id="myNavbar">
            <ul className="nav navbar-nav navbar-right">
                {this.props.litem.map((item) =>  <Item key={item.url} url={item.url} name={item.name}> </Item>)}
            </ul>
        </div>
        )}
});

NavbarContent.propTypes = {
 litem: React.PropTypes.array.isRequired
};


export default NavbarContent;
