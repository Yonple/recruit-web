import tw, { styled } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { Input, Tab } from 'src/components'
import { useController } from './controller'
import { PostList } from './components/PostList'
import constate from 'constate'

const { TabPane } = Tab
export const [PostsProvider, usePostsContext] = constate(useController)

const PostListPage = () => {
  const { query, setQuery, posts, loading, setTabKey, tabKey, lastPostRef } = usePostsContext()
  return (
    <Container>
      <Header>
        <h1 tw="text-6xl">솔리다리테 개발자 사전 과제</h1>
        <p tw="text-gray-500 text-2xl">게시물을 검색해보세요</p>
      </Header>
      <Main>
        <article tw="mx-auto w-96">
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="검색어를 입력하세요"
            type="search"
            icon={<FontAwesomeIcon icon={faSearch} />}
            loading={loading}
          />
        </article>

        <article>
          <Tab activeTabKey={tabKey} onChange={(index) => setTabKey(index)}>
            <TabPane tabKey={'a'} name="A Posts"></TabPane>
            <TabPane tabKey={'b'} name="B Posts"></TabPane>
          </Tab>
          <PostList posts={posts} />
          <i ref={lastPostRef}></i>
        </article>
      </Main>
    </Container>
  )
}

const Container = styled.section`
  ${tw`mx-auto max-w-full p-10`}
  width: 1000px;
`
const Header = tw.header`text-center space-y-5 my-10`

const Main = tw.main`space-y-10`

export default PostListPage
