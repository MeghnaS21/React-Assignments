import { useNavigate } from "react-router-dom";



const About = () => {

    const navigate = useNavigate();
    const gotToContact = ()=> {
        navigate('/contact');
    }

    const gotToBack=()=>{
        navigate(-1);
    }

    const gotToCM=()=>{
        navigate('/contactmanager');
    }
    return (
        <>
        
        <section>
            <h1>About Page</h1>
            <button onClick={()=>gotToContact()}> Go to Contact Page</button>
            <button onClick={()=>gotToBack()}> Go to previous Page </button>
            <button onClick={()=>gotToCM()}> Go to Contact Manager Page </button>
        </section>
        
        
        </>
    )
}

export default About
