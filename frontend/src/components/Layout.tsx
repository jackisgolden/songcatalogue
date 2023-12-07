import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header/Header';
import { LeftCol } from './LeftCol/LeftCol';
import { Box, Flex } from '@chakra-ui/react';

const Layout: React.FC = () => {
  return (
    <Flex direction="column">
      <Header />
      <Flex flex="1">
        <Box width="16%" marginX="2">
          <LeftCol />
        </Box>
        <Box flex="1">
          <Outlet />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Layout;
