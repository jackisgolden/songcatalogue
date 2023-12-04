import React from 'react';
import { VStack, HStack, Button, Flex } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main'
import { Feed } from '../../components/Feed/Feed';
import { LeftCol } from '../../components/LeftCol/LeftCol'; // Import the LeftCol component

export const Home = () => {
  const navigate = useNavigate();

  return (
    <VStack w={'100%'} h={'100%'} minH={'100vh'}>
      <Header />
      <Main>
        <Flex w={'100%'} gap={'1em'} direction={'row'}>
          <LeftCol /> 
          <Flex direction={'column'} w={'full'} gap={'1em'}>
            <Feed />
          </Flex>
        </Flex>
      </Main>
    </VStack>
  );
};
