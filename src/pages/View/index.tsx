import { useHistory } from 'react-router'
import tw, { styled } from 'twin.macro'
import { useController } from './controller'

const PostViewPage = () => {
  const { post } = useController()
  const history = useHistory()

  if (!post) return null

  return (
    <Container>
      <article tw="border p-10 mb-4">
        <header>
          <h2 tw="text-center mb-10 text-4xl">{post.title}</h2>
        </header>

        <div>
          <p>{post.content}</p>
        </div>
      </article>
      <footer>
        <Button onClick={() => history.goBack()}>뒤로가기</Button>
      </footer>
    </Container>
  )
}

const Container = styled.section`
  ${tw`mx-auto max-w-full p-10 my-20`}
  width: 1000px;
`

const Button = styled.button`
  ${tw`focus:outline-none px-8 py-3 bg-blue-500 text-white font-bold rounded-md hover:(shadow-md bg-blue-400) transition-all`}
`

export default PostViewPage
