import React, { Component } from "react";
import leaves from "./leaves.png";
class Contact extends Component {
    render() {
        return (
            <div>
                <h2>GOT QUESTIONS?</h2>
                <p>Connect with me on <a href="https://www.linkedin.com/in/jacobedavidson/">LinkedIn</a>.</p>
                <p>Check out my GitHub <a href="https://github.com/MicrowavedBunny">Here</a>.</p>
                <p>You can Email me <a href="mailto:Jayz34567@gmail.com">Here</a></p>
                <img id={"leaves"} src={leaves}/>
            </div>
        );
    }
}

export default Contact;