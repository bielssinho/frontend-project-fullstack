import { RoutesMain } from './routes'
import GlobalStyles from './styles/GlobalStyles'
import { AuthProvider } from './providers/AuthProvider'
import { AxiosInterceptor } from './components/AxiosInterceptor'

const App = () => {

  return (
    <>
      <GlobalStyles />
      <AxiosInterceptor>
        <AuthProvider>
          <RoutesMain />
        </AuthProvider>
      </AxiosInterceptor>
    </>
  )
}

export default App
