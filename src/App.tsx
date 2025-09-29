import RouteProvider from './routerProvider'
import { AppRouter } from './router'

function App() {

  return (
    <RouteProvider>
      <AppRouter />
    </RouteProvider>
  )
}

export default App