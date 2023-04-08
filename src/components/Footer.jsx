import React from 'react';
import '../App.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer">
                <div className="row">
                    <a href="#"><i className="fa fa-facebook"></i></a>
                    <a href="#"><i className="fa fa-instagram"></i></a>
                    <a href="#"><i className="fa fa-youtube"></i></a>
                    <a href="#"><i className="fa fa-twitter"></i></a>
                </div>

                <div className="row">
                    <ul>
                        <li><a href="#">Jeremie Walls </a></li>
                        <li><a href="#">Jeremiah Huynh</a></li>
                        <li><a href="#">Yen Shen</a></li>
                        <li><a href="#">Puppy Bowl</a></li>
                        <li><a href="#">Love Coding</a></li>
                    </ul>
                </div>

                <div className="row">
                    PupplyBowl Copyright © 2023 PuppyBowl - All rights(are not)reserved || STOP PLAY COOKIE CLICKERS 
                </div>
            </div>
        </footer>
    );
};

export default Footer;