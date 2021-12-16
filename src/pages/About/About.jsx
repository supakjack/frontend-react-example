import React, { useContext, useEffect, useState } from 'react'
import { AboutContext } from '../../contexts'
import { gql, useQuery } from '@apollo/client'
import { DefaultApiProvider } from './../../adapters'

export const About = () => {
  const { content, setContent } = useContext(AboutContext)
  const [posts, setPosts] = useState([])

  const GET_POSTS = gql`
    query {
      posts {
        id
        content
      }
    }
  `
  const { loading, data } = useQuery(GET_POSTS, {})
  console.log(loading)
  console.log(data)

  useEffect(() => {
    console.log('useEffect in About')
    setContent(`Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.`)
  }, [setContent])

  useEffect(() => {
    DefaultApiProvider.get('/items/posts').then((result) => {
      setPosts(result.data.data)
      console.log(result.data.data)
    })
  }, [setPosts])

  const post = posts.length
    ? posts.map((result) => <p key={result.content}>{result.content}</p>)
    : null

  return (
    <div className="about">
      <div className="container">
        <div className="row align-items-center my-5">
          <div className="col-lg-7">
            <img
              className="img-fluid rounded mb-4 mb-lg-0"
              src="http://placehold.it/900x400"
              alt=""
            />
          </div>
          <div className="col-lg-5">
            <h1 className="font-weight-light">About</h1>
            <p>{content}</p>
            {post}
          </div>
        </div>
      </div>
    </div>
  )
}
