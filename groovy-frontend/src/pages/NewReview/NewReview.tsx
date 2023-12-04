import {
    Text,
    Input,
    HStack,
    Button,
    VStack,
    Textarea,
    useToast,
    FormLabel,
    FormControl,
    useNumberInput,
    FormErrorMessage
  } from '@chakra-ui/react'
  import * as yup from 'yup'
  import { useNavigate } from 'react-router-dom'
  import { Main } from '../../components/Main/Main'

  
  export type FormData = {
    song: string
    text?: string
    rating?: number
    watchedAt?: string
  }

  export const NewReview = () => {

  
    return (
      <VStack
        h={'100%'}
        w={'100%'}
        flexGrow={1}
        flexShrink={0}
        minH={'100vh'}
      >
        <Main>
         
        </Main>
      </VStack >
    )
  }