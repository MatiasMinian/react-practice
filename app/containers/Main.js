import React from 'react'
import Navbar from '../components/navbarResponsive/Navbar'

let Main = React.createClass({

    render(){
        const items = [{name:"contactanos", url:"#contactanos"},{name:"que hacemos",url:"#que_hacemos"},{name:"LogIn",url:"#login"}];
       return (

           <div>
               <Navbar brand="ResCourts" photo= "logo.png" litem={items}/>
               {this.props.children}
           </div>)
           }
});

export default Main;