import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  config: {
    initialColorMode: "light",
    useSystemColorMode: false,
  },
  colors: {
    gray: {
      '900': '#47585B',
      '600': '#999999',
      '300': '#F5F8FA',
      '100': '#dadada',
    },
    yellow: {
      '900': '#ffba08',
    }
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: (props) => ({
      'html, body': {
        color: props.colorMode === 'dark' ? 'gray.300' : 'gray.900',
        bg: props.colorMode === 'dark' ? 'black' : 'white',
      },
      '.swiper-button-prev': {
        color: 'yellow.900',
        left: ['15px', '30px', '45px'],
      },
      '.swiper-button-next': {
        color: 'yellow.900',
        right: ['15px', '30px', '45px'],
      },
      '.swiper-button-prev:after, .swiper-button-next:after': {
        fontSize: ['1.2rem', '2rem', '3rem'],
      },
      '.swiper-pagination-bullet-active': {
        bg: 'yellow.900',
      },
      '.swiper-pagination-bullet': {
        h: ['8px', '12px', '16px'],
        w: ['8px', '12px', '16px'],
      }
    }),
  }
})
