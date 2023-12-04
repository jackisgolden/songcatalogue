import { VStack, Flex } from '@chakra-ui/react';
import { Header } from '../../components/Header/Header';
import { Main } from '../../components/Main/Main'
import { Feed } from '../../components/Feed/Feed';
import { LeftCol } from '../../components/LeftCol/LeftCol';

export const Home = () => {

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
