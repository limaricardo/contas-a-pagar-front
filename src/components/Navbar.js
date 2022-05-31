import React from "react";

const Navbar = () => {
    return (
        <div className="ui top menu">
            <img src="https://app.lucrorural.com.br/static/media/logo2.13dd5fa2.png" alt="big big" style={{"width": "120px", "height": "60px"}}></img>
            <div className="right menu">
                <div className="ui right aligned category search item">
                <div className="ui transparent icon input">
                    <input className="prompt" type="text" placeholder="Procurar contas a pagar" />
                    <i className="search link icon"></i>
                </div>
                <div className="results"></div>
                </div>
                <div className="ui bottom attached segment">
                <p></p>
                </div>
            </div>
        </div>
    )
};

export default Navbar