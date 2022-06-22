import React from "react";
import logo from '../images/logo.png'

const Navbar = () => {
    return (
        <div className="ui top menu">
            <img src={logo} alt="logo" style={{"margin-left": "20px", "width": "140px", "height": "50px"}}></img>
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