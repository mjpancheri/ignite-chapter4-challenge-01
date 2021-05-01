import { Box } from '@chakra-ui/layout';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination } from 'swiper/core';
import { Slide, SlideProps } from './Slide';

interface SliderProps {
  slides: SlideProps[];
}

SwiperCore.use([Navigation, Pagination]);

export function Slider({ slides }: SliderProps) {
  return (
    <Box
      h={[250, 350, 450]}
      w="100%"
      maxW={1240}
      mx="auto"
      mb={["5", "8", "10"]}
    >
      <Swiper
        navigation
        pagination
        spaceBetween={20}
        slidesPerView={1}
        style={{width: '100%', height: '100%', flex: '1'}}
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
  )
}