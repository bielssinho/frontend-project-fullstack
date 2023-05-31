import { RoutesMain } from './routes'
import GlobalStyles from './styles/GlobalStyles'
import { AuthProvider } from './providers/AuthProvider'
import { AxiosInterceptor } from './components/AxiosInterceptor'
import { RegisterProvider } from './providers/RegisterProvider'

const App = () => {

  return (
    <>
      <GlobalStyles />
      <AxiosInterceptor>
        <AuthProvider>
          <RegisterProvider>
            <RoutesMain />
          </RegisterProvider>
        </AuthProvider>
      </AxiosInterceptor>
    </>
  )
}

export default App
