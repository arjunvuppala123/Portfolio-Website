import React from 'react';
import "./MainNavigation.css";

function MainNavigation(){
        return (
            <div>
                <header id="header" class="fixed-top">
                    <div class="container d-flex align-items-center justify-content-between">
                        <nav id="navbar" class="navbar">
                            <ul>
                                <li>
                                    <a class="nav-link scrollto active" href="#hero">Home</a>
                                </li>
                                <li>
                                    <a class="nav-link scrollto" href="#about">Who am I?</a>
                                </li>
                                <li>
                                    <a class="nav-link scrollto " href="#work">My Tech-stack</a>
                                </li>
                                <li>
                                    <a class="nav-link scrollto " href="#blog">My Projects</a>
                                </li>
                                <li>
                                    <a class="nav-link scrollto" href="#contact">Contact Me!</a>
                                </li>
                            </ul>
                            <i class="bi bi-list mobile-nav-toggle"></i>
                        </nav>
                    </div>
                </header>
            </div>
        )
    }

export default MainNavigation;
