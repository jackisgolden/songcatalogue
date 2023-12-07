import {
    Flex,
    Text,
    Button,
    Avatar,
  } from '@chakra-ui/react'
  import { useNavigate } from 'react-router-dom'
  import { Link } from 'react-router-dom'
  
  export const Header = () => {
    const navigate = useNavigate()
  
    return (
      <Flex
        as="header"
        p={'1em'}
        w='100%'
        justifyContent={'center'}
      >
        <Flex
          alignItems={'center'}
          w={['100%', '100%', '48em']}
          justifyContent={'space-between'}
        >
          <Button
            variant={'unstyled'}
            onClick={() => navigate('/')}
          >
            <Text
              fontSize={'3xl'}
              fontWeight={'bold'}
            >
              Groovy
            </Text>
          </Button>
  
          <Link to="/user/:userid">
          <Avatar
            as='button'
            size='sm'
            cursor={'pointer'}
          />
        </Link>
  
        </Flex>
      </Flex>
    )
  }