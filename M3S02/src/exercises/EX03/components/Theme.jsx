// Exercise 03 - Change theme DARK : LIGHT

import { useTheme } from '../contexts/ThemeContext';
import './Theme.css';

function ThemeButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <h1 className="themeTitle">EX03 - Switch Mode</h1>
      <button className='themeButton' onClick={toggleTheme}>
        Switch to {theme === 'light' ? 'DARK mode' : 'LIGHT mode'}
      </button>
    </>
  );
}

export default ThemeButton;
