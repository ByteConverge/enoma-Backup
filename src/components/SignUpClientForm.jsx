/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function SignUpClientForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { name, phoneNumber, email, password, confirmPassword } = formData;

    // Basic validation
    if (!name || !phoneNumber || !email || !password || !confirmPassword) {
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
      }));
      return;
    }

    // Sending POST request to the server
    try {
      const response = await fetch('https://example.com/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();

      if (data.token) {
        // Storing JWT in local storage
        localStorage.setItem('jwt', data.token);
        // Redirect to the dashboard
        navigate('/');
      } else {
        setErrors((prevErrors) => ({
          ...prevErrors,
          form: 'Signup failed',
        }));
      }
    } catch (error) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        form: 'Failed to sign up',
      }));
      console.error('There was an error!', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="signUpForm">
      {errors.form && <p style={{ color: 'red' }}>{errors.form}</p>}
      <label>Name</label>
      <input
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      {errors.name && <p style={{ color: 'red' }}>{errors.name}</p>}

      <label>Phone number</label>
      <input
        type="number"
        name="phoneNumber"
        value={formData.phoneNumber}
        onChange={handleChange}
        required
      />
      {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}

      <label>Email</label>
      <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        onBlur={handleBlur}
        required
      />
      {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}

      <label>Password</label>
      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

      <label>Confirm Password</label>
      <input
        type="password"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      {errors.confirmPassword && <p style={{ color: 'red' }}>{errors.confirmPassword}</p>}

      <button className="sign-in-button" type="submit">Sign Up</button>
    </form>
  );
}

export default SignUpClientForm;
