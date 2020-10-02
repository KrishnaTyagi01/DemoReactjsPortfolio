import React,{useRef, useEffect} from 'react'
import Button from '@material-ui/core/Button';
import gsap from "gsap";


const Intro = () => {
   const introsec = useRef(null);
   useEffect(()=>{
   gsap.from(".intropara", {duration:2,ease: "elastic", x:100});
   gsap.from(".name", {duration:2,delay:0.3,ease: "elastic", x:100});
   gsap.from(".desc", {duration:2,delay:0.5,ease: "elastic", x:100});
   gsap.from(".row", {duration:2,delay:0.8,ease: "elastic", x:100});
   gsap.from(".introbtn", {duration:2,rotate:"360",ease: "bounce", x:150});
   },[])

 
   return (
      
      <>
         <section ref={introsec} className="section-1">
            <div className="introDiv">
               <div className="container" style={{ position: "sticky" }}>
                  <p className="intropara" >Hi, my name is </p>
                  <h1 className="name" style={{ marginBottom: "-1x" }}>Krishna Tyagi.</h1>
                  <h2 className="desc" style={{ marginTop: "-10px" }}>I am a full stack web developer</h2>
                  <div className="row" style={{ marginLeft: "-8px" }}>
                     <div className="col s6" style={{paddingBottom:"15px"}}>
                        <p className="longdesc" >I am a full stack developer, experienced in ReactJs, NodeJs, HTML5, CSS, mongodb and expressJs</p>
                     </div>
                  </div>
                  <Button className="git introbtn" size="large" variant="outlined"  style={{borderColor:"#91FEF6"}}>
                     <span style={{color:"#91FEF6"}}>Get In Touch</span> 
                 </Button>
               </div>
            </div>
         </section>
      </>
   )

}

export default Intro;