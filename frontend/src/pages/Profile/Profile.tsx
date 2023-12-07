import {
  Box,
  Image,
  Text,
  VStack,
  HStack
} from '@chakra-ui/react';
import PlaylistGrid from '../../components/PlaylistGrid/PlayListGrid';
import {Feed} from '../../components/Feed/Feed'
export const Profile = () => {
  return (
    <Box
      minH="100vh"
      w="100%"
      p={4}
      display="flex"
      flexDirection="row"
    >
      {/* Left Column */}
      <VStack
        flex="1"
        align="start"
        maxW="sm"
        spacing={4}
      >
        <Image
          borderRadius="full"
          boxSize="150px"
          src="http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=identicon"
          alt="Profile Picture"
        />
        <Text fontSize="2xl">User's Name</Text>
        <HStack spacing={4}>
          <Text><b>123</b> Followers</Text>
          <Text><b>456</b> Following</Text>
        </HStack>
        <Box>
          <PlaylistGrid/>
        </Box>
      </VStack>

      <Box
        flex="2"
        ml={8}
      >
        <Feed/>
      </Box>
    </Box>
  );
};
