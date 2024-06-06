import {Link ,NavLink} from "react-router-dom"

export default function NavBar(){

     const activeStyles ={
        fontWeight: "bold",
        TextDecoration: "underline"
     }

    return(
        <nav className="navBar">
        <figure>
       {/* <img src="" alt="" width="40px"/> */}
       LOGO
        </figure>
        {/*  */}
        <div className="navBar--links">
            <div className="HAF--links">
              <NavLink to="/" Style={({isActive})=> isActive? activeStyles : null}>Home</NavLink>
              <NavLink to="/about" Style={({isActive})=> isActive? activeStyles : null}>About us</NavLink>
              <NavLink to="/faq" >FAQ</NavLink>
            </div>
            {/*  */}
            <div className="links--login--signup">
                <Link>Sign in</Link>
                <Link to="">Sign up</Link>
            </div>
        </div>
    </nav> 
    )
}