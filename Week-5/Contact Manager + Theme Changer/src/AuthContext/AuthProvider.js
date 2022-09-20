import { useState } from "react";
import AuthContext from "./AuthContext";
import MainPage from "./MainPage";
const AuthProvider=()=>{
   
    const [loginValue]=useState(false)
    return(
        <div>
        <AuthContext.Provider value={{loginStatus:loginValue}}>
            <MainPage></MainPage>
        </AuthContext.Provider>
        </div>
    )
}
export default AuthProvider