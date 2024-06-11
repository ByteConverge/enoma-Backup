

export default function SignInForm(){
    return(
        <form action="" className="loginForm">
        
        <label htmlFor="">User name or email address</label>
        <input
         type="text"
          placeholder="" 
          required
          />

        <label htmlFor="">Your password</label>
        
        <input 
        type="password"
         placeholder="" 
         required
         />

        <a href="#" className="forgot-password">Forgot your password?</a>
        <button className="sign-in-button">Sign in</button>

        </form>

    )
}

