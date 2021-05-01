import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Flex, Grid, Text, Heading, Box } from '@chakra-ui/react';

import { ContinentData } from '../api';
import { Header } from '../../components/Header';
import { Info } from '../../components/Info';
import { City } from '../../components/City';

interface ContinentProps {
  continent: ContinentData,
}

export default function Continent({ continent }: ContinentProps) {
  const cities = continent.cities.reduce((acc, city) => {
    return acc += ', ' + city.name + ' (' + city.country + ')';
  }, '');

  return (
    <>
      <Head>
        <title>{continent.title} | Worldtrip</title>
      </Head>
      
      <Flex
        direction="column"
        mx="auto"
      >
        <Header />

        <Flex
          w="100%"
          h={['150px', '280px', '500px']}
          maxWidth={1440}
          mx="auto"
          pl={["0", "0", "36"]}
          pt={["0", "0", "72"]}
          bgImage={`url(${continent.imgBanner})`}
          bgRepeat="no-repeat"
          bgSize="cover"
          bgPosition="center"
          alignItems="center"
          justifyContent={["center", "center", "flex-start"]}
        >
          <Heading 
            as="h1"
            color="gray.300"
            fontWeight="semibold"
            fontSize={["2xl", "3xl", "5xl"]}
            textAlign={["center", "center", "left"]}
          >
            {continent.title}
          </Heading>
        </Flex>

        <Box
          w="100%"
          maxWidth={1160}
          mx="auto"
          mb={["5", "8", "10"]}
          px="4"
        >
          <Grid
            templateColumns={["1fr", "1fr", "1.2fr 1fr"]}
            gap={[5, 12, 20]}
            my={["8", "12", "20"]}
          >
            <Text
              fontSize={["lg", "xl", "2xl"]}
              fontWeight="gray.600"
              maxWidth={600}
              textAlign="justify"
            >
              {continent.description}
            </Text>
            <Flex 
              alignItems="center"
              justifyContent="space-between"
            >
              <Info qtd={continent.paises} label="países" />
              <Info qtd={continent.linguas} label="línguas" />
              <Info qtd={continent.cities.length} label="cidades +100" cities={cities.substring(2)} />
            </Flex>
          </Grid>

          <Heading
            as="h1"
            fontSize={["2xl", "3xl", "4xl"]}
            fontWeight="semibold"
            color="gray.600"
            mb={["6", "8", "10"]}
          >
            Cidades +100
          </Heading>
          
          <Grid
            templateColumns={["1fr", "repeat(2, 1fr)", "repeat(4, 1fr)"]}
            gap={["4", "8", "10"]}
            alignItems="center"
            justifyContent="center"
            px={["8", "8", "0"]}
          >
            {continent.cities && continent.cities.map(city => <City key={city.name} img={city.img} name={city.name} country={city.country} flag={city.flag} />)}
          </Grid>
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