import tw, { styled } from 'twin.macro'
import { Input } from './components/Input'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { useController } from './controller'
import { ImageListContainer } from './components/ImageListContainer'

function App() {
  const { query, setQuery, images } = useController()
  return (
    <Container>
      <Header>
        <h1 tw="text-6xl">솔리다리테 개발자 사전 과제</h1>
        <p tw="text-gray-500 text-2xl">이미지를 검색해보세요</p>
      </Header>
      <main tw="space-y-10">
        <article tw="mx-auto w-96">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어를 입력하세요"
            type="search"
            icon={<FontAwesomeIcon icon={faSearch} />}
          />
        </article>

        <article>
          <ImageListContainer images={images} />
        </article>
      </main>
    </Container>
  )
}

const Container = styled.section`
  ${tw`mx-auto max-w-full p-10`}
  width: 1000px;
`

const Header = tw.header`text-center space-y-5 my-10`

export default App
