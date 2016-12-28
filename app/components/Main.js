import React from 'react'

let Main = React.createClass({
   render(){
       return (
           <div>
               Welcome to main!
               {this.props.children}
           </div>)
           }
});

export default Main;