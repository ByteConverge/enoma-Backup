import SignUpLenderForm from "../components/SignUpLenderForm"
import "../cssStyles/signUpLender.css"
import {Link} from "react-router-dom"


export default function SignUpLender(){
  const signUpBgstyle ={
    background:`linear-gradient(rgba(245, 245, 245, 0),rgba(0, 0, 0, 0.486)), url("signinBg.jpg")`,
    backgroundSize: `100% 100%`,
    backgroundRepeat: `no-repeat`,
    backgroundAttachment: `fixed`,
    position: `relative`
   }


    return(
        <div className="signUp--container">

       <div  style={signUpBgstyle}>
         <h1 className="enoma--header">E-Noma</h1>
       </div>
       {/* ...... */}


       <div className="signUp---fields">
         <h1 className="signUp--header">Sign Up</h1>
         {/* ---Form */}
        <SignUpLenderForm />


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