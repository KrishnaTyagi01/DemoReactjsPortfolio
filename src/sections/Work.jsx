import React, {useEffect} from 'react';
import gsap from "gsap";


const Work = () => {

    useEffect(()=>{
        gsap.from(".colL", {duration:2,ease: "bounce", x:-150});
        gsap.from(".colR", {duration:2,ease: "bounce", x:150});
        },[])

    return (
        <section>
            <div className="container" style={{paddingTop:"55px"}}>
               
                <div class="row ">
                    <div class="col s12 m6 colL">
                        <div class="card ">
                            <div class="card-content white-text">
                                <span class="card-title">E Commerce application</span>
                                <p>This is a E Commerce Application I made using MERN Stack</p>
                            </div>
                            <div class="card-action">
                                <a target="_blank" href="https://ecom-project1.herokuapp.com/"><i style={{fontSize:"30px"}}class="fas fa-external-link-square-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6 colR">
                        <div class="card ">
                            <div class="card-content white-text">
                                <span class="card-title">Instagram Clone</span>
                                <p>Instagram Clone I made using MERN stack</p>
                                
                            </div>
                            <div class="card-action">
                                <a target="_blank" href="https://instaclone-kt.herokuapp.com/"><i style={{fontSize:"30px"}}class="fas fa-external-link-square-alt"></i></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row ">
                    <div class="col s12 m6 colL">
                        <div class="card ">
                            <div class="card-content white-text">
                                <span class="card-title">React Js Front-end Website</span>
                                <p>Front-end Website made using ReactJs</p>
                            </div>
                            <div class="card-action">
                                <a target="_blank" href="https://krishnatyagi01.github.io/DemoReactWebsite/"><i style={{fontSize:"30px"}}class="fas fa-external-link-square-alt"></i></a>
                            </div>
                        </div>
                    </div>
                    <div class="col s12 m6 colR">
                        <div class="card ">
                            <div class="card-content white-text">
                                <span class="card-title">Yelpcamp</span>
                                <p>Colt steel's famous Yelpcamp.</p>
                            </div>
                            <div class="card-action">
                                <a target="_blank" href="https://yelpcamp-kt.herokuapp.com"><i style={{fontSize:"30px"}}class="fas fa-external-link-square-alt"></i></a>
                                
                            </div>
                        </div>
                    </div>
                </div>

             
            </div>
        </section>
    )
}


export default Work;