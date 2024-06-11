
export default function SignUpLenderForm(){
    return (
        <form action="" className="signUpForm">
        
        <label htmlFor="">Name</label>
        <input 
        type="text" 
        placeholder=""
        required
        />
        <label htmlFor="">Phone number</label>
        <input
         type="number" 
         placeholder=""
         required
         />
        <label htmlFor="">Password</label>
        <input
         type="password"
          placeholder=""
          required
          />
        <label htmlFor="">Confirm Password</label>
        <input
         type="password" 
         placeholder=""
         required
         />
      
        {/* <select className="selectOption" name="" id="" >
            <option value="">Select Lease Property</option>
            <option value="">Land</option>
            <option value="">Farm Euipments</option>
            <option value="">Both</option>
        </select> */}

      
        <button className="sign-in-button">Sign Up</button>

        </form>

    )
}