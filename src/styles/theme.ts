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
      },
      '.swiper-button-next': {
        color: 'yellow.900',
      },
      '.swiper-pagination-bullet-active': {
        bg: 'yellow.900',
      },
    }),
  }
})
