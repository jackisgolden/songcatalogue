import {
    Tab,
    Text,
    Box,
    Flex,
    Grid,
    Tabs,
    Image,
    HStack,
    TabList,
    GridItem,
    TabPanel,
    TabPanels,
    useColorMode,
    VStack,
    Button,
    Divider
  } from '@chakra-ui/react'
  import { useParams } from 'react-router-dom'
 
  
  export const AlbumDetails = () => {
    const { colorMode } = useColorMode()
    const { movieId } = useParams()
 
  
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
      </Box >
    )
  }