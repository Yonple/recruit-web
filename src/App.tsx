import tw, { styled } from 'twin.macro'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import PostListPage from './pages'
import PostViewPage from './pages/View'

function App() {
  return (
    <Main>
      <LineGradient />
      <BrowserRouter>
        <Switch>
          <Route path="/:type" component={PostViewPage} />
          <Route path="/" component={PostListPage} />
        </Switch>
      </BrowserRouter>
    </Main>
  )
}

const LineGradient = styled.div`
  ${tw`bg-gradient-to-r from-blue-500 to-green-500 w-full h-4`}
`

const Main = styled.main``

export default App
