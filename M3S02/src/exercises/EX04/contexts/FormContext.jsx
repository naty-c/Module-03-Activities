// Exercise 04 - Form with validation and context

import { createContext, useContext, useState } from 'react';

const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({});

  const updateForm = (data) => {
    setFormData(data);
    setTimeout(() => {
      setFormData({});
    }, 5000);
  };

  return (
    <FormContext.Provider value={{ formData, updateForm }}>
      {children}
    </FormContext.Provider>
  );
};

export function useFormContext() {
  return useContext(FormContext);
}