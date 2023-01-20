import { createContext, useState } from 'react';
import './App.css';
import Content from './components/Content';
import Title from './components/Title';

export const ThemeContext = createContext()

function App() {

  const [theme,setTheme] = useState('light')
  
  return (
    <ThemeContext.Provider value={{theme,setTheme}}>
      <div>
        <Title />
        <Content />
      </div>
    </ThemeContext.Provider>
    
  );
}

export default App;
