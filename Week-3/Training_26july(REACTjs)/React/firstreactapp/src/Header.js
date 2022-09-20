export function Header() {
    return (
        <>
            <h1>Welcome to my Task-1 </h1>
            <h2>HEADING TAG</h2>
        </>
    )
}

export function Body() {
    return (
        <>
        <h3>PARAGRAPH TAG </h3>
        <p>React was conceived at Facebook and, with
             the exception of a minor snag in 2017 over license restrictions, has seen steady 
             growth since its launch. React may be the most popular JavaScript framework nowadays, depending on whose statistics you look at.
             </p>
        </>
    )
}


export function Form() {
    return (
        <>
        <h3>FORM TAG</h3>
            <form>
                <label>Enter your name:
                    <input type="text" />
                </label><br></br>
                <label>Contact Number:
                    <input type="number" />
                </label><br></br>
                <label>Enter your email:
                    <input type="email" />
                </label>
            </form>
        </>
    )
}

export function Image() {
    return(
        <>
        <img src="{bg}" alt="Unable to view" />
        </>
    )
}

export function List() {
    return(
        <>
        <h3>LIST TAGS</h3>
            <ul>
                <li>REACT JS</li>
                <li>REACT NATIVE</li>
                <li>ANGULAR</li>
            </ul></>
    )
}


