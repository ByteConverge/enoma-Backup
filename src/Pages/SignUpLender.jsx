import "../cssStyles/signUpLender.css"
import {Link} from "react-router-dom"


export default function SignUpLender(){
    return(
        <div className="signUp--container">

       <div className="signUpBg">
         <h1 className="enoma--header">E-Noma</h1>
       </div>
       {/* ...... */}


       <div className="signUp---fields">
         <h1 className="signUp--header">Sign Up</h1>
         {/* ---Form */}
         <form action="" className="signUpForm">
        
        <label htmlFor="">Name</label>
        <input type="text" placeholder=""/>
        <label htmlFor="">Phone number</label>
        <input type="number" placeholder=""/>
        <label htmlFor="">Password</label>
        <input type="text" placeholder=""/>
        <label htmlFor="">Confirm Password</label>
        <input type="text" placeholder=""/>
      
        <select className="selectOption" name="" id="">
            <option value="">Select Lease Property</option>
            <option value="">Land</option>
            <option value="">Farm Euipments</option>
            <option value="">Both</option>
        </select>

      
        <button className="sign-in-button">Sign Up</button>

        </form>


      {/* Google facebook buttons */}

           
        <div className="sign-up">
          Already have an account? <Link  className="to--sign--up" to="/signIn">Sign in</Link>
       </div>

       <div className="or">OR</div>
     

       <div className="google--facebook--buttons"> 

        <a href="">
             <button className="google-button">

            <figure>
            <img src="googleLogo.svg" alt="Google Icon" width="40px" />
            </figure>

            <p>Continue with Google</p>
        </button>
        </a>

        <a href="">
        <button className="facebook-button">
            <figure>
            <img src="facebookSignin2.svg" alt="Facebook Icon" width="40px" />

            </figure>
           <p> Continue with Facebook</p>
        </button>
        </a>

        </div> 


        </div>
   
        </div>
        
    )
}