import { useState, useEffect } from "react"

const AboutComp = () => {
const [compMounted, setCompMounted] = useState(false)

useEffect(() => {
    if(!compMounted){
        setCompMounted(true)
    }
}, [compMounted])

return <>
    <div className="container text-white text-center" style={{'marginTop': '50px' , 'marginBottom': '50px'}} id="about">
        <h3>
            <span className="fs-1">Slatelight Pty Ltd</span> <br /> 
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