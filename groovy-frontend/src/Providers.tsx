import { ReactNode } from 'react'
import theme from './theme'
import { BrowserRouter } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'
import { AuthProvider } from './contexts/AuthContext'

export function Providers ({ children }: { children: ReactNode }) {
  return (
    <BrowserRouter>
    <ChakraProvider
        theme={theme}
    >
        <AuthProvider>
        {children}
        </AuthProvider>
    </ChakraProvider>
    </BrowserRouter>
  )
}