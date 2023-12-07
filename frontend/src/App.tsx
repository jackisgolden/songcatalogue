import { Routes } from './routes/Routes'
import { Providers } from './Providers'
import ErrorBoundaryRetry from './ErrorBoundary'

function App () {
  return (
      <Routes />
  )
}

function AppRoot () {
  return (
    <Providers>
      <ErrorBoundaryRetry>
        <App />
      </ErrorBoundaryRetry>
    </Providers>
  )
}

export default AppRoot