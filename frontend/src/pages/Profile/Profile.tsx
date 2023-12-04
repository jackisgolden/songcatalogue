import { useNavigate, useParams } from 'react-router-dom'
import {
  Box,
  Tab,
  Tabs,
  Grid,
  Text,
  Flex,
  Link,
  Image,
  Button,
  TabList,
  Divider,
  TabPanel,
  GridItem,
  TabPanels,
  useColorMode
} from '@chakra-ui/react'


export const Profile = () => {
  const navigate = useNavigate()
  const { colorMode } = useColorMode()
  const { username } = useParams()


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