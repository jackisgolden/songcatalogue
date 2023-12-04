import { Box, Text, Avatar, Flex, Link, Grid, GridItem, Button, Divider } from '@chakra-ui/react'
import { startTransition } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

export const Review = () => {
  const navigate = useNavigate()
  const { id } = useParams()


 
  return (
    <Box
      minH={'100vh'}
      h={'100%'}
      w='100%'
      gap={4}
      display={'flex'}
      flexDirection={'column'}
      alignItems={'center'}
    >
      
    </Box>
  )
}