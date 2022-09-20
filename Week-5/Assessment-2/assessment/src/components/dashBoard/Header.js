import { NavLink } from "react-router-dom"

const Header = () => {
  return (
    <>




      <header className="navbar navbar-expand navbar-dark flex-column flex-md-row bd-navbar">
        <NavLink className="navbar-brand mr-0 mr-md-2" to="/user" aria-label="Bootstrap">
          <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40"  ><title>User</title>
          {/* <path fill="currentColor" d="M510 8a94.3 94.3 0 0 1 94 94v408a94.3 94.3 0 0 1-94 94H102a94.3 94.3 0 0 1-94-94V102a94.3 94.3 0 0 1 94-94h408m0-8H102C45.9 0 0 45.9 0 102v408c0 56.1 45.9 102 102 102h408c56.1 0 102-45.9 102-102V102C612 45.9 566.1 0 510 0z"></path><path fill="currentColor" d="M196.77 471.5V154.43h124.15c54.27 0 91 31.64 91 79.1 0 33-24.17 63.72-54.71 69.21v1.76c43.07 5.49 70.75 35.82 70.75 78 0 55.81-40 89-107.45 89zm39.55-180.4h63.28c46.8 0 72.29-18.68 72.29-53 0-31.42-21.53-48.78-60-48.78h-75.57zm78.22 145.46c47.68 0 72.73-19.34 72.73-56s-25.93-55.37-76.46-55.37h-74.49v111.4z">

          </path> */}
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" fill="currentColor"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87" fill="white"></path><path d="M16 3.13a4 4 0 0 1 0 7.75" fill="currentColor"></path>
          </svg>
          </NavLink>

        <div className="navbar-nav-scroll">
          <ul className="navbar-nav bd-navbar-nav flex-row">
            <li className="nav-item">
              <NavLink className="nav-link " to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link " to="/explorejobs" >Jobs</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#contact" >Contact</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#faqs" >FAQs</NavLink>
            </li>
          </ul>
        </div>

        <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">

          <li className="nav-item">
            <a className="nav-link p-2" href="https://github.com/twbs/bootstrap" target="_blank" rel="noopener" aria-label="GitHub"><svg xmlns="http://www.w3.org/2000/svg" className="navbar-nav-svg" viewBox="0 0 512 499.36" role="img" focusable="false"><title>GitHub</title><path fill="currentColor" fill-rule="evenodd" d="M256 0C114.64 0 0 114.61 0 256c0 113.09 73.34 209 175.08 242.9 12.8 2.35 17.47-5.56 17.47-12.34 0-6.08-.22-22.18-.35-43.54-71.2 15.49-86.2-34.34-86.2-34.34-11.64-29.57-28.42-37.45-28.42-37.45-23.27-15.84 1.73-15.55 1.73-15.55 25.69 1.81 39.21 26.38 39.21 26.38 22.84 39.12 59.92 27.82 74.5 21.27 2.33-16.54 8.94-27.82 16.25-34.22-56.84-6.43-116.6-28.43-116.6-126.49 0-27.95 10-50.8 26.35-68.69-2.63-6.48-11.42-32.5 2.51-67.75 0 0 21.49-6.88 70.4 26.24a242.65 242.65 0 0 1 128.18 0c48.87-33.13 70.33-26.24 70.33-26.24 14 35.25 5.18 61.27 2.55 67.75 16.41 17.9 26.31 40.75 26.31 68.69 0 98.35-59.85 120-116.88 126.32 9.19 7.9 17.38 23.53 17.38 47.41 0 34.22-.31 61.83-.31 70.23 0 6.85 4.61 14.81 17.6 12.31C438.72 464.97 512 369.08 512 256.02 512 114.62 397.37 0 256 0z"></path></svg></a>
          </li>
          <li className="nav-item">
            <a className="nav-link p-2" href="https://twitter.com/" target="_blank" rel="noopener" aria-label="Twitter"><svg xmlns="http://www.w3.org/2000/svg" className="navbar-nav-svg" viewBox="0 0 512 416.32" role="img" focusable="false"><title>Twitter</title><path fill="currentColor" d="M160.83 416.32c193.2 0 298.92-160.22 298.92-298.92 0-4.51 0-9-.2-13.52A214 214 0 0 0 512 49.38a212.93 212.93 0 0 1-60.44 16.6 105.7 105.7 0 0 0 46.3-58.19 209 209 0 0 1-66.79 25.37 105.09 105.09 0 0 0-181.73 71.91 116.12 116.12 0 0 0 2.66 24c-87.28-4.3-164.73-46.3-216.56-109.82A105.48 105.48 0 0 0 68 159.6a106.27 106.27 0 0 1-47.53-13.11v1.43a105.28 105.28 0 0 0 84.21 103.06 105.67 105.67 0 0 1-47.33 1.84 105.06 105.06 0 0 0 98.14 72.94A210.72 210.72 0 0 1 25 370.84a202.17 202.17 0 0 1-25-1.43 298.85 298.85 0 0 0 160.83 46.92"></path></svg></a>
          </li>
          {/* <li className="nav-item">
            <NavLink className="nav-link p-2" to="https://www.youtube.com/" target="_blank" rel="noopener" aria-label="Open Collective">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" fill-rule="evenodd" className="navbar-nav-svg" viewBox="0 0 40 41" role="img" focusable="false"><title>Open Collective</title><path fill-opacity=".4" d="M32.8 21c0 2.4-.8 4.9-2 6.9l5.1 5.1c2.5-3.4 4.1-7.6 4.1-12 0-4.6-1.6-8.8-4-12.2L30.7 14c1.2 2 2 4.3 2 7z"></path><path d="M20 33.7a12.8 12.8 0 0 1 0-25.6c2.6 0 5 .7 7 2.1L32 5a20 20 0 1 0 .1 31.9l-5-5.2a13 13 0 0 1-7 2z"></path>
              </svg></NavLink>
          </li> */}
          <li className="nav-item">
          <NavLink className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" to="/docs/4.3/getting-started/download/">Login</NavLink>
          </li>
          <li>
          <NavLink className="btn btn-bd-download d-none d-lg-inline-block mb-3 mb-md-0 ml-md-3" to="/docs/4.3/getting-started/download/">Signup</NavLink>
          </li>
        </ul>

        
        
      </header>









      {/* <header id="body-header">

        <nav className="navbar navbar-expand-lg navbar">
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink to='/' className="nav-link">HOME <span className="sr-only"></span></NavLink>
              </li>
              <li className="nav-item">

                <NavLink to='/about' className="nav-link">ABOUT</NavLink>
              </li>
              <li className="nav-item">

                <NavLink to='/products' className="nav-link">PRODUCTS</NavLink>
              </li>
              <li className="nav-item">

                <NavLink to='/myCart' className="nav-link">CART</NavLink>
              </li>
            </ul>

            <div className="to-right">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <NavLink to='/login' className="nav-link">LOGIN</NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to='/signup' className="nav-link">SIGNUP</NavLink>
                </li>
              </ul>


            </div>
          </div>
        </nav>


      </header> */}

    </>
  )
}

export default Header


/*


<nav className="navbar navbar-expand-lg navbar-light bg-light">
  <NavLink className="navbar-brand" to="#">Navbar</NavLink>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        // <NavLink className="nav-link" to="#">Home <span className="sr-only">(current)</span></NavLink>
        <NavLink to='/' className="nav-link">HOME <span className="sr-only">(current)</span></NavLink>
      </li>
      <li className="nav-item">
        // <NavLink className="nav-link" to="#">Features</NavLink>
         <NavLink to='/about' className="nav-link">ABOUT</NavLink>
      </li>
      <li className="nav-item">
        //<NavLink className="nav-link" to="#">Pricing</NavLink>
         <NavLink to='/products' className="nav-link">PRODUCTS</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</NavLink>
      </li>
    </ul>
  </div>
</nav>

*/