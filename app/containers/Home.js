import React from 'react'

let Home = React.createClass({

    render(){
        return (
        <div className="jumbotron home-page">
            <div className="input-group input-group-seach">
                <span className="input-group-addon">@</span>
                <input type="text" className="form-control" placeholder="Nombre de usuario"/>
            </div>
        </div> );
    }
    });

export default Home;