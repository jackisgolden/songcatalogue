import {
    Flex,
    VStack,
    HStack,
    Button
  } from '@chakra-ui/react'
  import { useNavigate } from 'react-router-dom'
  import { Main } from '../../components/Main/Main'

  export const Home = () => {
    const navigate = useNavigate()
  
    return (
      <VStack
        w={'100%'}
        h={'100%'}
        minH={'100vh'}
      >
        <Main>
          <Flex
            w={'100%'}
            gap={'1em'}
            direction={'column'}
          >
            <HStack
              w={'100%'}
              justifyContent={'flex-end'}
            >
              <Button
                onClick={() => {
                  navigate('/review/new')
                }}
              >
                Create Review
              </Button>
            </HStack>
          </Flex>
        </Main>
      </VStack>
    )
  }