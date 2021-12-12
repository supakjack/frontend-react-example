import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { PostsContext } from '../../contexts'

export const Posts = () => {
  const { header, content, setHeader, setContent } = useContext(PostsContext)

  useEffect(() => {
    console.log('useEffect in Posts')
    setHeader(`This is a post title Posts`)

    setContent(`Lorem Ipsum is simply dummy text of the printing and typesetting
  industry. Lorem Ipsum has been the industry's standard dummy
  text ever since the 1500s, when an unknown printer took a galley
  of type and scrambled it to make a type specimen book.`)
  }, [setContent, setHeader])

  return (
    <div className="home">
      <div className="container">
        <Link to="/blog/this-is-a-post-title">
          <div className="row align-items-center my-5">
            <div className="col-lg-7">
              <img
                className="img-fluid rounded mb-4 mb-lg-0"
                src="http://placehold.it/900x400"
                alt=""
              />
            </div>
            <div className="col-lg-5">
              <h1 className="font-weight-light">{header}</h1>
              <p>{content}</p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  )
}
