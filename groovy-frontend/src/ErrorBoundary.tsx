import { Button, Center, Text } from '@chakra-ui/react'
import { Component, ErrorInfo, ReactNode } from 'react'

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: {
    message: string;
    source: Error | null | undefined;
  } | null
}

class ErrorBoundaryRetry extends Component<Props, State> {
  public state: State = {
    hasError: false,
    error: null
  }

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true, error: { message: _.message, source: (_ as Error) } }
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo)
  }

  public render() {
    if (this.state.hasError) {
      return (
        <Center>
          <Text>Error: {this?.state?.error?.message}</Text>
          <pre>{JSON.stringify(this?.state?.error?.source, null, 2)}</pre>
          <Button mt='10px' onClick={() => this.setState({ error: null })}>
            retry
          </Button>
        </Center>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundaryRetry