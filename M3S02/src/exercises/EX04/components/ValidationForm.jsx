// Exercise 04 - Form with validation and context

import { useForm } from 'react-hook-form';
import { useFormContext } from '../contexts/FormContext';
import './ValidationForm.css';

function ValidationForm() {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();
  const { updateForm } = useFormContext();

  const onSubmit = (data) => {
    updateForm(data);
    alert('Form successfully submitted');
    reset();  // Clean form after submit
  };

  return (
    <>
      <form className="validationContainer" onSubmit={handleSubmit(onSubmit)}>
      <h1 >EX04 - Validation Form</h1>
        <div>
          <label htmlFor="name">Name:</label>
          <input 
          type="name"
          id="validate-form-name"
          {...register("name", { required: "Name is mandatory" })} />
          {errors.name && <p>{errors.name.message}</p>}
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <input 
          type="email"
          id="validate-form-email"
          {...register("email", { required: "Email is mandatory",
              pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
              }
          })} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>

        <button type="submit">Send</button>
      </form>
    </>
  );
}

export default ValidationForm;
