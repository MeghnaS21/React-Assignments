import { useNavigate } from "react-router-dom"

const Contact = () => {

    const navigate=useNavigate();
    const goToHome=()=>{
        navigate('/');
    }
    return (
        <>
        <section>
            <h1>Contact Page</h1>
            <button onClick={goToHome}>Go to Home Page</button>
            <button onClick={()=>{navigate(-1)}}>Go back</button>
        {/* NAVIGATE -1 MEANS BACK TO THE PREVIOUS PAGE */}
        </section>
        
       
        </>
    )
}

export default Contact