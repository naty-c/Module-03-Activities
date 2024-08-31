// Exercise 04 - Form with validation and context

import { useFormContext } from '../contexts/FormContext';

function DisplayDataForm() {
  const { formData } = useFormContext();

  return (
<div>
      <h2 style={{ color: '#cf8989', textAlign: 'center', marginTop: '20px' }}>Form Data:</h2>
      <div>
        {Object.entries(formData).map(([key, value]) => (
          <div key={key} style={{ marginBottom: '10px', textAlign: 'center', marginTop: '10px' }}>
            <strong>{key}:</strong> {value}
          </div>
        ))}
      </div>
    </div>
  );
}

export default DisplayDataForm;
