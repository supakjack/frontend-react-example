import { createContext, useState } from 'react'

export const AboutContext = createContext()

export const AboutProvider = ({ children }) => {
  const [content, setContent] = useState('');
  return (
    <AboutContext.Provider value={{content,setContent}}>
      {children}
    </AboutContext.Provider>
  );
};