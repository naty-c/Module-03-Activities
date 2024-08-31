import { useForm } from 'react-hook-form';
import { useState } from 'react';
import './Form.css'

function RegisterForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const [successMessage, setSuccessMessage] = useState("");

  const onSubmit = (data) => {
    console.log(data);
    reset();  // Clean form after submit
    setSuccessMessage("Successfully registered!");

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000); // Clean after 2 seconds
  };

  return (
    <>
    <form onSubmit={handleSubmit(onSubmit)} className="form-container">
      <h1>EX01 - Form</h1>
      <div className="form-group">
        <label htmlFor="name">Name:</label>
        <input 
        type='text'
        id='name'
        {...register("name", { required: "Name is mandatory" })} />
        {errors.name && <p className="error-message">{errors.name.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input 
        type='email'
        id='email'
        {...register("email", { required: "Email is mandatory" })} />
        {errors.email && <p className="error-message">{errors.email.message}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="password">Password:</label>
        <input 
        type="password" 
        id='password'
        {...register("password", { required: "Password is mandatory" })} />
        {errors.password && <p className="error-message">{errors.password.message}</p>}
      </div>

      <button type="submit" className="submit-button">Register</button>

      {successMessage && <p className="success-message">{successMessage}</p>}
    </form>
    </>
  );
}

export default RegisterForm;