import React,{useEffect} from 'react';
import Button from '@material-ui/core/Button';
import gsap from "gsap";

const Contact = () => {

    useEffect(()=>{
        gsap.from(".l", {duration:2,ease: "bounce", x:-150});
        gsap.from(".r", {duration:2,ease: "bounce", x:150});
        gsap.from(".rotate", {duration:2,rotate:"360",ease: "bounce", x:150});
        
        },[])


    return (
        <section>
            <div className="row " style={{ marginLeft: "80px", paddingTop: "70px", paddingBottom: "105px" }} >
                <form className="col s8 contact" style={{ paddingLeft: "250px" }}>
                    <h4 style={{ paddingLeft: "100px", fontWeight: "bold" }} className="l" >Send Me Your Query</h4>
                    <div className="row r">
                        <div className="input-field col s6">
                            <input id="first_name" type="text" className="validate" />
                            <label for="first_name">First Name</label>
                        </div>
                        <div className="input-field col s6">
                            <input id="last_name" type="text" className="validate" />
                            <label for="last_name">Last Name</label>
                        </div>
                    </div>
                    <div className="row l">
                        <div className="input-field col s12">
                            <input id="email" type="email" className="validate" />
                            <label for="email">Email</label>
                        </div>
                    </div>
                    <div className="row r">
                        <div className="input-field col s12">
                            <i className="material-icons prefix">mode_edit</i>
                            <textarea id="textarea1" className="materialize-textarea"></textarea>
                            <label for="textarea1">Enter Your Query Here</label>
                        </div>
                    </div>
                     <Button className="git rotate" size="medium" variant="outlined"  style={{borderColor:"#91FEF6"}}>
                     <span style={{color:"#91FEF6"}}>Get In Touch <i class="material-icons right">send</i></span> 
                 </Button>
                </form>
            </div>

        </section>
    )
}


export default Contact;