import { NavLink } from "react-router-dom"
// import ThemeContext from "../ThemeChangerApp/theme-context";
// import { useContext } from "react";

const Header = () => {
    return (
        <>
            <header id="body-header" >
            
                <nav>
                    <ul class="horizontal-list text-center">
                   
                        <li>
                            <NavLink to='/'>HOME</NavLink>
                        </li>
                        <li>
                            <NavLink to='/about'>ABOUT</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contact'>CONTACT</NavLink>
                        </li>
                        <li>
                            <NavLink to='/contactmanager'>CONTACTMANAGER</NavLink>
                        </li>
                    </ul>
                </nav>

                
            </header>

            
        </>
    )
}

export default Header