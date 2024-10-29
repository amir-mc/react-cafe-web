import { useThemecontext } from "../context"

const Heder = ()=>{
    const theme=useThemecontext();
    const dark=theme.dark
    const changeDark=()=>{
      theme.setDark(!dark)
    }

    return(
       
        <header id="header" className={`header d-flex align-items-center sticky-top ${dark ? "bg-dark navbar-light ":"bg-light"}`}>
        <div className="container position-relative d-flex align-items-center justify-content-between">
    
          <a href="index.html" className="logo d-flex align-items-center me-auto me-xl-0">

            <h1 className={`sitename ${dark ? "text-light":"text-dark"}`}>cafe</h1>
            <span>.</span> 
          </a>
    
          <nav id="navmenu" className={`navmenu`}>
            <ul className={` ${dark ? "text-light":"text-dark"}`}>
              <li><a href="#hero" className={` ${dark ? "text-light":"text-dark"}`}>Home<br/></a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#menu">Menu</a></li>
              <li><a href="#events">Events</a></li>
              <li><a href="#chefs">Chefs</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li className="dropdown"><a href="/#"><span>Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                <ul>
                  <li><a href="/#">Dropdown 1</a></li>
                  <li className="dropdown"><a href="/#"><span>Deep Dropdown</span> <i className="bi bi-chevron-down toggle-dropdown"></i></a>
                    <ul>
                      <li><a href="/#">Deep Dropdown 1</a></li>
                      <li><a href="/#">Deep Dropdown 2</a></li>
                      <li><a href="/#">Deep Dropdown 3</a></li>
                      <li><a href="/#">Deep Dropdown 4</a></li>
                      <li><a href="/#">Deep Dropdown 5</a></li>
                    </ul>
                  </li>
                  <li><a href="/#">Dropdown 2</a></li>
                  <li><a href="/#">Dropdown 3</a></li>
                  <li><a href="/#">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
          </nav>
    
          <button onClick={changeDark} className={`btn ${ dark? 'btn-light':'btn-dark'} `}>{dark ? 'light':'dark'}</button>
    
        </div>
      </header>
    
    )
}
export default Heder