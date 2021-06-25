import tw, { styled } from 'twin.macro'
import React from 'react'
import { Link } from 'react-router-dom'
import { Post } from 'src/api'

interface Props {
  posts?: Post[]
}
export const PostList = ({ posts }: Props) => {
  if (!posts) return null
  return (
    <ul tw="border rounded-md shadow-inner p-5">
      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <Link to={`/${post.id}`}>
            <Item>
              <Title>
                <span tw="text-blue-500 font-bold">{post.id}.</span> {post.title}
              </Title>
              <Content>{post.content}</Content>
            </Item>
          </Link>
        </React.Fragment>
      ))}
    </ul>
  )
}
const Item = styled.li`
  ${tw`p-5 hover:bg-gray-100 transition-colors`}
`
const Title = styled.h3``
const Content = styled.p`
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
`
