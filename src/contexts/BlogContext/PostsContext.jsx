import { createContext, useState } from 'react'

export const PostsContext = createContext()

export const PostsProvider = ({ children }) => {
  const [header, setHeader] = useState('')
  const [content, setContent] = useState('')
  return (
    <PostsContext.Provider value={{ content, setContent, header, setHeader }}>
      {children}
    </PostsContext.Provider>
  )
}
