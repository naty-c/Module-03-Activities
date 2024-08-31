import RegisterForm from './exercises/EX01/components/Form';
import TaskList from './exercises/EX02/components/List';
import { ThemeProvider, useTheme } from './exercises/EX03/contexts/ThemeContext';
import ThemeButton from './exercises/EX03/components/Theme';
import Counter from './exercises/EX05/components/Counter';
import './App.css'
import { useEffect } from 'react';
import { FormProvider } from './exercises/EX04/contexts/FormContext';
import ValidationForm from './exercises/EX04/components/ValidationForm';
import DisplayDataForm from './exercises/EX04/components/DisplayDataForm';


function App() {
  const theme = useTheme();

  useEffect(() => {
    document.body.className = theme === 'light' ? 'light-mode' : 'dark-mode';
  }, [theme]);

  return (
    <>
      <ThemeProvider>
        <FormProvider>
          <RegisterForm />
            <div className="divider"></div>
          <TaskList />
            <div className="divider"></div>
          <ThemeButton />
            <div className="divider"></div>
            <ValidationForm />
            <DisplayDataForm />
      </FormProvider>
      <div className="divider"></div>
      <Counter />
      </ThemeProvider>
    </>
  )
}

export default App
