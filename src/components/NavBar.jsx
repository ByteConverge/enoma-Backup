import {Link ,NavLink} from "react-router-dom"

export default function NavBar(){
    return(
        <nav className="navBar">
        <figure>
       {/* <img src="" alt="" width="40px"/> */}
       LOGO
        </figure>
        {/*  */}
        <div className="navBar--links">
            <div className="HAF--links">
              <NavLink to="/" activeStyle={{fontWeight:"bolder" , color: "red"}}>Home</NavLink>
              <NavLink to="/about">About us</NavLink>
              <NavLink to="/faq">FAQ</NavLink>
            </div>
            {/*  */}
            <div className="links--login--signup">
                <Link>Sign in</Link>
                <Link to="/signUp">Sign up</Link>
            </div>
        </div>
    </nav> 
    )
}