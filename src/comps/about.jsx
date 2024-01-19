import { useState, useEffect } from "react"

const AboutComp = () => {
const [compMounted, setCompMounted] = useState(false)

useEffect(() => {
    if(!compMounted){
        setCompMounted(true)
        doOtherThing()
    }
}, [compMounted])

function doOtherThing(){
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let interval = null;
    document.querySelector(".site-title-inner").onmouseover = event => {  
    let iteration = 0;
    
    clearInterval(interval);
    
    interval = setInterval(() => {
        event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
            if(index < iteration) {
            return event.target.dataset.value[index];
            }
        
            return letters[Math.floor(Math.random() * 26)]
        })
        .join("");
        
        if(iteration >= event.target.dataset.value.length){ 
        clearInterval(interval);
        }
        
        iteration += 1 / 3;
    }, 70);
    }
}

return <>
    <div className="container text-white text-center" style={{'marginTop': '50px'}} id="about">
        <h3>
            <span className="site-title-inner magic-text fs-1 page-tit" data-value="Slatelight Pty Ltd" style={{'cursor': 'default'}}>Slatelight Pty Ltd</span> <br /> 
            <span className="page-sub-tit text-capitalize">your partner in innovative software solutions. </span>
        </h3>
        <div className="row d-flex justify-content-center" style={{'justifyContent': 'center', display: 'block'}}>
            <div className="col-lg-8 col-md-10">
                <p className="summery">
                    Specializing in Systems Development, we excel in using 
                    &nbsp;<a href="https://react.dev/" target="_blank">React</a>&nbsp; 
                    for dynamic user interfaces and 
                    &nbsp;<a href="https://www.python.org/" target="_blank">Python</a>&nbsp; 
                    for robust backend systems. 
                    Our team's expertise ensures <b>tailored</b>, efficient solutions that cater to your unique business needs. 
                    Join us in redefining software <b>excellence</b>.
                </p>
            </div>
        </div>
    </div>
</>
}

export default AboutComp