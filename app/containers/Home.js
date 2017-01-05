import React from 'react'

let Home = React.createClass({

    render(){
        return (
            <div className="jumbotron home-page">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-12">
                            <h1>BIN sports</h1>
                            <h4>elige un deporte y reserva!</h4>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4"><img className="container img-circle img-responsive img-sports"
                                                       src="app/assets/tenis.jpg"/></div>
                        <div className="col-md-4"><img className="container img-circle img-responsive img-sports"
                                                       src="app/assets/paddle.jpg"/></div>
                        <div className="col-md-4"><img className="container img-circle img-responsive img-sports"
                                                       src="app/assets/futbol.jpg"/></div>
                    </div>
                </div>
            </div> );
    }
});

export default Home;