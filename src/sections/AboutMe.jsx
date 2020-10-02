import React,{useEffect} from 'react'
import gsap from "gsap";


const About = () => {

    useEffect(()=>{
        gsap.from(".aboutme", {duration:4,ease: "back", x:150});
        },[])
    return (
        <>
            <section >
                <div style={{paddingTop:"55px"}} className="container aboutme">
                    <div className="row">

                        <div className="col s6 ">
                            <h4 className="about">About Me</h4>

                            <p >Hello! I'm Krishna, a web developer based in delhi, India.</p>
                            <br />
                            <p >I enjoy creating things that live on the internet, whether that be websites, applications, or anything in between. My goal is to always build products that provide pixel-perfect, performant experiences.</p>
                            <br />
                            <p>Here are a few technologies i am expreriencd with:</p>
                            <br />
                            <ul className="tech">
                                <li className="techlist" ><i class="fas fa-angle-right"></i> HTML</li>
                                <li className="techlist" style={{ marginLeft: "23px" }}><i class="fas fa-angle-right"></i> CSS</li>
                            </ul>
                            <br />
                            <ul className="tech">
                                <li className="techlist" ><i class="fas fa-angle-right"></i> ReactJs</li>
                                <li className="techlist" style={{ marginLeft: "13px" }} ><i class="fas fa-angle-right"></i> NodeJs</li>
                            </ul>
                            <br />
                            <ul className="tech">
                                <li className="techlist" ><i class="fas fa-angle-right"></i> ExpressJs</li>
                                <li className="techlist" ><i class="fas fa-angle-right"></i> MongoDB</li>
                            </ul>
                        </div>
                        <div className="col s6 main_header">
                            <div className="design">
                                <img src={require('./MyPic.jpeg')} alt="My pic" />
                                <div id="rotateBorder"></div>
                                <div className="grid">
                                    <div className="data-white"></div>
                                    <div></div>
                                    <div></div>
                                    <div className="data-white"></div>
                                </div>

                                <div className="blend">
                                    <img src={require('./MyPic.jpeg')} alt="My pic" />
                                    <div className="grid">
                                        <div></div>
                                        <div className="data-white"></div>
                                        <div className="data-white"></div>
                                        <div></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default About;