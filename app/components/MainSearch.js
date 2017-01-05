/**
 * Created by Pablo on 5/1/2017.
 */
import React from 'react'

let MainSearch = React.createClass({

    render(){
        return (

                <div className="input-group input-group-seach">
                    <span className="input-group-addon">@</span>
                    <input type="text" className="form-control" placeholder="Nombre de usuario"/>
                </div>
        )}
});

export default MainSearch;