import React from "react";
import './mainstyle.css';
import portrait from '../image/portrait.jpg';
import linkdin from '../image/Vector.png';
import insta from '../image/instagram.png';
import github from '../image/github.png';
import twitter from '../image/twitter.png';
import facebook from '../image/facebook.png';
import email from '../image/email.png'
export default function Main(){
    return(
        <div className="main">
            <div className="container">
                <div className="img">
                    <img src={portrait } alt="image of a person" className="img-real" />
                </div>
                <div className="main-body">
                    <h4 className=" text name">sumit kumar dandia</h4>
                    <h4 className="text  namework">Frontend Developer</h4>
                    <div className="but">
                        <a href="mailto:sumitkkumar639@gmail.com" className="email">
                            <button className="email" target="blank">
                                <img src={email} alt="email" />
                                Email
                            </button>
                        </a>
                        <a href="https://www.linkedin.com/in/sumit-kumar-dandia-930a661b2/" className="linkdin" target="blank">
                            <button className="linkdin">
                                <img src={linkdin} alt="linkdin" className="link-img"/>
                                Linkdin
                            </button>
                        </a>
                    </div>
                    <div className="detail">
                        <h5 className="about">About</h5>
                        <p className="p">I am a frontend developer with an interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and ready to learn new things.</p>
                        <h5 className="about">Interests</h5>
                        <p className="p">Food . Music. Nature. Reader. Internet fanatic. Movie geek. Travel. Coffee fanatic.</p>


                    </div>

                </div>
                <div className="foot">
                    <a href="https://www.instagram.com/sumitkkumar639/" target="blank"><img src={insta} alt="instagram" /></a>
                    <a href="https://twitter.com/sumitkkumar639" target="blank"><img src={twitter} alt="twitter" /></a>
                    <a href="https://www.facebook.com/" target="blank"><img src={facebook} alt="facebook" /></a>
                    <a href="https://github.com/sumit639-code" target="blank"><img src={github} alt="github"  className="github"/></a>
                </div>
            </div>
        </div>
    )
}