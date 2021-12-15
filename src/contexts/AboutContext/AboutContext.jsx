import { createContext, useState } from 'react'
// import { ApolloConsumer } from '@apollo/client';

// const WithApolloClient = () => (
//   <ApolloConsumer>
//     {client => 'We have access to the client!' /* do stuff here */}
//   </ApolloConsumer>
// );

export const AboutContext = createContext()

export const AboutProvider = ({ children }) => {
  const [content, setContent] = useState('');
  return (
    <AboutContext.Provider value={{content,setContent}}>
      {children}
    </AboutContext.Provider>
  );
};