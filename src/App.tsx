import { RoutesMain } from './routes'
import GlobalStyles from './styles/GlobalStyles'
import { AuthProvider } from './providers/AuthProvider'

const App = () => {

  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <RoutesMain />
      </AuthProvider>
    </>
  )
}

export default App
