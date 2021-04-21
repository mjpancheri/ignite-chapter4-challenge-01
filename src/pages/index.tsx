import { GetServerSideProps } from 'next';
import Head from 'next/head';
import { Flex, Image, Text, Box, Divider } from '@chakra-ui/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';

import 'swiper/swiper-bundle.min.css';

import { Header } from '../components/Header';
import { Slide } from '../components/Slide';
import { TravelTypes } from '../components/TravelTypes';
import { SlideProps } from '../components/Slide';

interface HomeProps {
  slides: SlideProps[];
}

SwiperCore.use([Navigation, Pagination]);

export default function Home({ slides }: HomeProps) {
  console.log(slides);

  return (
    <>
      <Head>
        <title>Worldtrip</title>
      </Head>

      <Flex
        direction="column"
        h="100vh"
      >
        <Header />

        <Image src="/images/banner.svg" mx="auto" />

        <Box w="100%" mt="10" pb="6" maxWidth={1240} mx="auto" px="6">
          <TravelTypes />

          <Divider
            mx="auto"
            my="10"
            border={1}
            borderStyle="solid"
            borderColor="gray.900"
            w={90}
            h={0}
            opacity="1"
          />

          <Text
            fontSize="xl"
            fontWeight="gray.600"
            mx="auto"
            mb="10"
          >
            Vamos nessa?<br />
            Então escolha o seu continente
          </Text>

          <Box
            h={450}
            w="100%"
            maxW={1240}
            mx="auto"
          >
            <Swiper
              navigation
              pagination
              spaceBetween={20}
              slidesPerView={1}
              onReachBeginning={(swiper) => swiper.allowSlidePrev = swiper.isBeginning}
              onReachEnd={(swiper) => swiper.allowSlideNext = swiper.isEnd}
            >
              {slides.map(slide => (
                <SwiperSlide color="var(--chakra-colors-yellow.900)" key={slide.id}>
                  <Slide id={slide.id} urlImage={slide.urlImage} title={slide.title} subtitle={slide.subtitle} />
                </SwiperSlide>
              ))}
            </Swiper>
          </Box>
        </Box>
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