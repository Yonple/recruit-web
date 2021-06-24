import 'react-app-polyfill/ie11'
import 'react-app-polyfill/stable'
import 'antd/dist/antd.less'
import 'src/styles/global.css'

import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'

import App from './App'
import { ConfigProvider } from 'antd'
import koKR from 'antd/es/locale/ko_KR'

import { ThemeProvider } from '@emotion/react'
import theme from 'src/styles/theme'
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

const queryClient = new QueryClient()

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <ConfigProvider locale={koKR}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ConfigProvider>
    </ThemeProvider>
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>,
  document.getElementById('root'),
)
