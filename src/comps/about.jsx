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
    <div className="container text-white text-center" style={{'marginTop': '50px' , 'marginBottom': '50px'}} id="about">
        <h3>
            <span className="site-title-inner magic-text fs-1" data-value="Slatelight Pty Ltd" style={{'cursor': 'default'}}>Slatelight Pty Ltd</span> <br /> 
            <span className="opacity-75">your partner in innovative software solutions. </span>
        </h3>
        <span className="fs-5">
            Specializing in Systems Development, we excel in using 
            <a href="https://react.dev/" target="_blank">&nbsp;React&nbsp;</a> 
            for dynamic user interfaces and 
            <a href="https://www.python.org/" target="_blank">&nbsp;Python&nbsp;</a> 
            for robust backend systems. 
            Our team's expertise ensures <b>tailored</b>, efficient solutions that cater to your unique business needs. 
            Join us in redefining software <b>excellence</b>.
        </span>
    </div>
</>
}

export default AboutComp