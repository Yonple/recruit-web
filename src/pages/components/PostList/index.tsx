import tw, { styled } from 'twin.macro'
import { Link } from 'react-router-dom'
import { Post } from 'src/api'

const List = styled.ul`
  ${tw`border rounded-md shadow-inner p-5`}
`

interface Props {
  posts?: Post[]
}
export const PostList = ({ posts }: Props) => {
  if (!posts) return null

  return (
    <List>
      {posts.map((post) => (
        <Link to={`/${post.type}?id=${post.id}`} key={post.id}>
          <PostItem post={post} />
        </Link>
      ))}
    </List>
  )
}

// PostItem

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

interface PostProps {
  post: Post
}
const PostItem = ({ post }: PostProps) => {
  return (
    <Item>
      <Title>
        <span tw="text-blue-500 font-bold">{post.id}.</span> {post.title}
      </Title>
      <Content>{post.content}</Content>
    </Item>
  )
}
