import React from 'react';
import "./AboutMe.css";

function AboutMe() {
    return (
        <div>
            <section id="about" class="about-mf sect-pt4 route">
                <div class="container">
                    <div class="row">
                        <div class="col-sm-12">
                            <div class="box-shadow-full">
                                <div class="row">
                                    <div class="col-md-6">
                                        <div class="row">
                                            <div class="col-sm-6 col-md-5">
                                                <div class="about-img">
                                                    <img src="profilepic.jpg" class="img-fluid rounded b-shadow-a" alt="" /></div>
                                            </div>
                                            <div class="col-sm-6 col-md-7">
                                                <div class="about-info">
                                                    <p>
                                                        <span class="title-s">Name:
                                                        </span>
                                                        <span> Arjun Vuppala</span>
                                                    </p>
                                                    <p>
                                                        <span class="title-s">Profession:
                                                        </span>
                                                        <span> 3rd Year, BTech Student</span>
                                                    </p>
                                                    <p>
                                                        <span class="title-s">Email:
                                                        </span>
                                                        <span> arjunv2001@gmail.com</span>
                                                    </p>
                                                    <p>
                                                        <span class="title-s">Phone:
                                                        </span>
                                                        <span> +91 9535856353</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="skill-mf">
                                            <p class="title-s">Languages I know</p>
                                            <span>Python</span>
                                            <span class="pull-right"> 85%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{ "width": "85%" }} aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>JavaScript</span>
                                            <span class="pull-right"> 80%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{ "width": "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>Java</span>
                                            <span class="pull-right"> 77%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{ "width": "77%" }} aria-valuenow="77" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                            <span>C</span>
                                            <span class="pull-right"> 80%</span>
                                            <div class="progress">
                                                <div class="progress-bar" role="progressbar" style={{ "width": "80%" }} aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-6">
                                        <div class="about-me pt-4 pt-md-0">
                                            <div class="title-box-2">
                                                <h5 class="title-left">
                                                    About me
                                                </h5>
                                            </div>
                                            <p class="lead">
                                                I am currently pursuing B Tech (Computer Science) 3rd year in PES University. 
                                                I am a very techno savvy person and I always use my free time to learn latest technologies.
                                            </p>
                                            <p class="lead">
                                                I am proficient in Full-Stack Development, having done projects in ReactJS, Redux,
                                                React Hooks, Java SpringBoot, Node JS using Google Firebase/ MongoDB/PostgreSQL as
                                                Database.
                                            </p>
                                            <p class="lead">
                                            I have Expertise in Machine Learning using Python and have good grasp over framework like Tensorflow 2.0.
                                            Have done Projects which involve libraries such as sci-kit learn, NumPy, Pandas,etc. Have done projects in Big Data ecosystem using Hadoop, Apache Spark and
                                            Spark Streaming
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutMe;
