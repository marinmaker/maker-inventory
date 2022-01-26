import React from "react";
import "./style.css";

function About(){
    return(
        //page header
        <section id="about" className="about">
            <div className="container">
                <div className="row">
                    <img src="makerspace-logo-whitebg.jpg" className="col logo"/>
                </div>
                <h1 className="row title">Marin Makerspace</h1>
                <p className="row">Kit Inventory</p>
            </div>
        </section>
    );
}
export default About;