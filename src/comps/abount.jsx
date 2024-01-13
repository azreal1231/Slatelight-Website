import { useState, useEffect } from "react"

const AboutComp = () => {
const [compMounted, setCompMounted] = useState(false)

useEffect(() => {
    if(!compMounted){
        setCompMounted(true)
    }
}, [compMounted])

return <>

</>
}

export default AboutComp