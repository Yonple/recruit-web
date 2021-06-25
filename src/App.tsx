import tw, { styled } from 'twin.macro'
import { Switch, Route } from 'react-router-dom'
import PostListPage, { PostsProvider } from './pages'
import PostViewPage from './pages/View'

function App() {
  return (
    <Main>
      <LineGradient />
      <PostsProvider>
        <Switch>
          <Route path="/:type" component={PostViewPage} />
          <Route path="/" component={PostListPage} />
        </Switch>
      </PostsProvider>
    </Main>
  )
}

const LineGradient = styled.div`
  ${tw`bg-gradient-to-r from-blue-500 to-green-500 w-full h-4`}
`

const Main = styled.main``

export default App
