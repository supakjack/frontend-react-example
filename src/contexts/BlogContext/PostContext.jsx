import { createContext, useState } from 'react'

export const PostContext = createContext()

export const PostProvider = ({ children }) => {
  const [header, setHeader] = useState([])
  const [content, setContent] = useState([])
  return (
    <PostContext.Provider value={{ content, setContent, header, setHeader }}>
      {children}
    </PostContext.Provider>
  )
}
