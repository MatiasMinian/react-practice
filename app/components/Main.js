import React from 'react'
import Toolbar from '../components/Toolbar'

let Main = React.createClass({

    render(){
        const items = [{name:"contactanos", url:"#contactanos"},{name:"que hacemos",url:"#que_hacemos"},{name:"pitufo",url:"#pitufo"}];
       return (

           <div>
               <Toolbar brand="ResCourts" photo= "logo.png" litem={items}/>
               Aca arriba deberia estar ...aa
               {this.props.children}
           </div>)
           }
});

export default Main;