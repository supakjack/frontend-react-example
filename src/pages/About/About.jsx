import React, { useContext, useEffect } from 'react'
import { AboutContext } from '../../contexts'

export const About = () => {
  const { content, setContent } = useContext(AboutContext)

  useEffect(() => {
    console.log('useEffect in About')
    setContent(`Lorem Ipsum is simply dummy text of the printing and typesetting
    industry. Lorem Ipsum has been the industry's standard dummy text
    ever since the 1500s, when an unknown printer took a galley of type
    and scrambled it to make a type specimen book.`)
  }, [setContent])

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
          </div>
        </div>
      </div>
    </div>
  )
}
