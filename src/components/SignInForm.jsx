/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignInForm() {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    })
  }

  function validateEmail (email){
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'email' && !validateEmail(value)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address',
      }));
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: '',
      }));
    }
  };

  async function handleSubmit(e){
    e.preventDefault();
    const { email, password} = formData;

    // Basic validation
    if ( !email || !password) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: 'All fields are required',
      }));
      return;
    }
    if (!validateEmail(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: 'Please enter a valid email address',
      }));
      return;
    }
  

    // Sending POST request to the server
    try {
      const response = await fetch('https://enoma-backend-v1.onrender.com/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });
        

      if (response.ok) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: '',
        }));
        setSuccess("..logging in..")
        console.log("success")
        console.log(formData)
        console.log(response)

        setTimeout(() => {
          
          navigate('/');
        }, 3000);

          
      }else{
        console.log("conflict")
        setSuccess("")
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: 'wrong Email or password',
        }));
      }

      const data = await response.json();

      if (data.token) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: 'logging in',
        }));
        console.log("conflict")
      
        // Storing JWT in local storage

        localStorage.setItem('jwt', data.token);
        console.log(data.token)
        // Redirect to the dashboard
        // navigate('/');
      } else {
       
        console.log("conflict")
      
      }
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: 'Failed to sign up',
      }));
      
    }
  }
// toggle States
  const [toggle1, setToggle1] = useState(false)
  const [toggle2, setToggle2] = useState(false)

  function passwordToggle1(){
    setToggle1(preVState=>!preVState)
    
  }
  function passwordToggle2(){
    setToggle2(preVState=>!preVState)
  }
   

    // JSX RETURN

  return (
    <form onSubmit={handleSubmit} className="loginForm">

      {errors.form && <p style={{ color: 'red' ,fontSize: "1rem" }}>{errors.form}</p>}
      {success && <p style={{ color: 'green' ,fontSize: "1.5rem", textAlign:"center" }}>{success}</p>}
      {/* hidden input role */}
      <input 
      type="hidden"
       name="role"
       value={formData.role} 
      
       />
      {/* hidden input role */}

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        
      />
      {errors.email && <p style={{  color: 'red' ,fontSize: "1rem"}}>{errors.email}</p>}

      <label>Password</label>
      <input
        type={toggle1? "text" : "password"}
        name="password"
        value={formData.password}
        onChange={handleChange}
        
      />
      {/* Toogle 1 */}
       <span className="toggleSignIn" style={{display: "block"} } onClick={passwordToggle1}>&#x1f441;</span>


      <button className="sign-in-button" type="submit">Sign in</button>
    </form>
  )
}

export default SignInForm;
