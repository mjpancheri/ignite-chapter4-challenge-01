import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Flex, Heading, Divider } from '@chakra-ui/react';

import { Header } from '../components/Header';
import { Slider } from '../components/Slider';
import { TravelTypes } from '../components/TravelTypes';
import { SlideProps } from '../components/Slider/Slide';
import Banner from '../components/Banner';

interface HomeProps {
  slides: SlideProps[];
}

export default function Home({ slides }: HomeProps) {

  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <Flex
        direction="column"
        mx="auto"
      >
        <Header />
        
        <Banner />
        
        <TravelTypes />

        <Divider
          mx="auto"
          my={["6", "6", "10"]}
          border={1}
          borderStyle="solid"
          borderColor="gray.900"
          w={["60px", "75px", "90px"]}
          opacity="1"
        />

        <Heading
          fontSize={["md", "lg", "3xl"]}
          fontWeight="500"
          mb={["5", "8", "14"]}
          textAlign="center"
        >
          Vamos nessa?<br />
          Então escolha o seu continente
        </Heading>

        <Slider slides={slides} />
      </Flex>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  let slides = [];

  const data = await fetch('http://localhost:3000/api')
  .then(response => {
    return response.json();
  })
  .then(response => {
    return response;
  });
  
  slides = data.map(continent => {
    return { id: continent.id, title: continent.title, subtitle: continent.subtitle, urlImage: continent.imgHome };
  });

  return {
    props: {
      slides
    }
  }
}