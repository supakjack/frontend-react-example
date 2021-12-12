import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router'
import { PostContext } from '../../contexts'

export const Post = () => {
  const { postSlug } = useParams()
  const { header, content, setHeader, setContent } = useContext(PostContext)

  useEffect(() => {
    console.log('change postSlug')

    setHeader([[`This is a Post Title`], [`The post slug is,`]])

    setContent([
      [
        `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book.`
      ],
      [
        `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book.`
      ],
      [
        `Lorem Ipsum is simply dummy text of the printing and typesetting
      industry. Lorem Ipsum has been the industry's standard dummy text ever
      since the 1500s, when an unknown printer took a galley of type and
      scrambled it to make a type specimen book.`
      ]
    ])
  }, [postSlug, setContent, setHeader])

  return (
    <div className="home">
      <div className="container">
        <h1 className="mt-5">{header[0]}</h1>
        <h6 className="mb-5">
          {header[1]} {postSlug}
        </h6>
        <p>{content[0]}</p>
        <p>{content[1]}</p>
        <p>{content[2]}</p>
      </div>
    </div>
  )
}
