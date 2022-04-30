import React from "react";
import "./AboutMe.css";

class AboutMe extends React.Component {
    render() {
        return (
            <div id="AboutMeMain" className="container-fluid padding">
                <div className="row welcome text-center">
                    <div class="col-12">
                        <h1 class="display-4">Who am I?</h1>
                    </div>
                    <hr/>
                    <div id="about">
                    <img alt="profileimg" src={'./profilepic.jpg'} />
                    <p className="aboutMe">text</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default AboutMe;
