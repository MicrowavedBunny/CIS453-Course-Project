import React, { Component } from "react";
import gh from './github.PNG'
class Stuff extends Component {
    render() {
        return (
            <div>
                <h2>Portfolio</h2>
                <p>Here is an example of a GitHub Page I have published:</p>
                <iframe title="WeatherApp" src="https://microwavedbunny.github.io/WeatherApp/" width="100%" height="400" frameBorder="0"
                        scrolling="no"/>
                <p>This is a link to my Github Page!</p>
                <a href="https://github.com/MicrowavedBunny"><img src={gh} alt="GitHub"/></a>
            </div>
        );
    }
}

export default Stuff;