import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Flex, Image, Text, Heading, Box, SimpleGrid } from '@chakra-ui/react';

import { ContinentData } from '../api';
import { Header } from '../../components/Header';
import { Info } from '../../components/Info';
import { City } from '../../components/City';

interface ContinentProps {
  continent: ContinentData,
}

export default function Continent({ continent }: ContinentProps) {
  return (
    <>
      <Head>
        <title>{continent.title} | Worldtrip</title>
      </Head>
      
      <Flex
        direction="column"
        h="100vh"
      >
        <Header showBack />

        <Box w="100%" pb="6" maxWidth={1440} mx="auto" position="relative">
          <Heading as="h1" size="xl" color="gray.300" left="28" bottom="20" position="absolute">{continent.title}</Heading>
          <Image src={continent.imgBanner} mx="auto" />
        </Box>

        <Box w="100%" pb="6" maxWidth={1240} mx="auto" px="6">
          <Flex
            align="center"
            justify="space-between"
            maxWidth={1240}
            w="100%"
            mx="auto"
            my="20"
          >
            <Flex
              align="center"
              justify="space-between"
              w="100%"
            >
              <Text
                fontSize="lg"
                fontWeight="gray.600"
                maxWidth={600}
                w="100%"
                align="justify"
              >
                {continent.description}
              </Text>
              <Info qtd={continent.paises} label="países" />
              <Info qtd={continent.linguas} label="línguas" />
              <Info qtd={continent.cities.length} label="cidades +100" icon />
            </Flex>
          </Flex>

          <Box
            maxWidth={1240}
            w="100%"
            mx="auto"
          >
            <Heading
              as="h1"
              fontSize="2xl"
              fontWeight="semibold"
              color="gray.600"
              mb="10"
            >
              Cidades +100
            </Heading>
            <SimpleGrid
              flex="1"
              gap="10"
              minChildWidth="256px"
              align="flex-start"
            >
              {continent.cities && continent.cities.map(city => <City key={city.name} img={city.img} name={city.name} country={city.country} flag={city.flag} />)}
            </SimpleGrid>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { id } = params;

  const data = await fetch('http://localhost:3000/api')
  .then(response => {
    return response.json();
  })
  .then(response => {
    return response;
  });
  
  const continent = data.find(continent => (continent.id === Number(id)));
  
  return {
    props: {
      continent
    }
  }
}