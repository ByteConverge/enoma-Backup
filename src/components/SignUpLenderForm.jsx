/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import eyeToggle from "../assets/eye-slash.svg"

function SignUpClientForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    contactNumber: '',
    role: "lender"
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
    const { name,  contactNumber, email, password, confirmPassword } = formData;

    // Basic validation
    if (!name || ! contactNumber || !email || !password || !confirmPassword) {
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
    if (password !== confirmPassword) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: 'Passwords do not match',
      }
    ));
      return;
    }else{
        setErrors((prevErrors) => ({
            ...prevErrors,
            confirmPassword: '',
          }
        ));
    }

    // Sending POST request to the server
    try {
      const response = await fetch('https://enoma-backend-v1.onrender.com/api/auth/signup', {
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
          
          navigate('/signIn');
        }, 3000);

          
      }else{
        console.log("conflict")
        setSuccess("")
      
        
      setTimeout(() => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: 'User Already Exist',
        }));
        setTimeout(() => {
          setErrors((prevErrors) => ({
            ...prevErrors,
            form: '',
          }));
        }, 5000);
        
      },500);
      }

      // const data = await response.json();

      // if (data.token) {
      //   setErrors((prevErrors) => ({
      //     ...prevErrors,
      //     form: 'logging in',
      //   }));
      //   console.log("conflict")
      
      //   // Storing JWT in local storage

      //   localStorage.setItem('jwt', data.token);
      //   console.log(data.token)
      //   // Redirect to the dashboard
      //   // navigate('/');
      // } else {
       
      //   console.log("conflict")
      
      // }
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: 'Error: Check data connection',
      }));

      setTimeout(() => {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: '',
        }));
      }, 5000);
      
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
    <form onSubmit={handleSubmit} className="signUpForm">

      {errors.form && <p style={{ color: 'red' ,fontSize: "1rem" }}>{errors.form}</p>}
      {success && <p style={{ color: 'green' ,fontSize: "1.5rem", textAlign:"center" }}>{success}</p>}
      {/* hidden input role */}
      <input 
      type="hidden"
       name="role"
       value={formData.role} 
      
       />
      {/* hidden input role */}
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        
      />
      {errors.name && <p style={{  color: 'red' ,fontSize: "1rem"}}>{errors.name}</p>}

      <label>Phone number</label>
      <input
        type="number"
        name="contactNumber"
        value={formData.contactNumber}
        onChange={handleChange}
    
      />
      {errors.phoneNumber && <p style={{  color: 'red' ,fontSize: "1rem"}}>{errors.phoneNumber}</p>}

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        
      />
      {errors.email && <p style={{  color: 'red' ,fontSize: "1rem"}}>{errors.email}</p>}
      {/* passwords */}
    <div className='passwordOne'>
      <label>Password</label>
      <input
        type={toggle1? "text" : "password"}
        name="password"
        value={formData.password}
        onChange={handleChange}
        
      />
      {/* Toogle 1 */}
       <span className="toggle" style={{display: "block"} } onClick={passwordToggle1}>
        <img src={eyeToggle} alt="" />
       </span>
     </div>

      {errors.password && <p style={{  color: 'red' ,fontSize: "1rem"}}>{errors.password}</p>}
   <div  className='passwordOne' >
      <label>Confirm Password</label>
      <input
        type={toggle2? "text" : "password"}
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        
      />
      {/* Toggle 2 */}
      <span className='toggle' style={{display: "block"}} onClick={passwordToggle2}>
        <img src={eyeToggle} alt="" />
      </span>
   </div>
      {errors.confirmPassword && <p style={{  color: 'red' ,fontSize: "1rem"}}>{errors.confirmPassword}</p>}

      <button className="sign-up-button" type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpClientForm;
