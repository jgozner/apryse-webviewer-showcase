import { createBreakpoints } from '@chakra-ui/theme-tools';
import { extendTheme, createStandaloneToast } from '@chakra-ui/react';

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '83em',
  mobile: '0',
  desktop: '860px',
});

export const theme = extendTheme(
  {
    breakpoints,
    styles: {
      global: {
        'div#root': {
          height: '100%',
          overflow: 'hidden',
        },
        'html, body': {
          height: '100%',
          width: '100%',
        },
      },
    },
    colors: {
      lightGrey: '#E8EFF6',
      indigo: '#0206A8',
      navy: '#00083D',
      teal: '#00EB9B',
      yellow: '#E7E710',
      grey: '#7B8191',
      lightBlue: '#00E2EA',
      orange: '#FF7D1B',
      black: '#000000',
      blue: {
        500: '#0206A8'
      }
    },
    components: {
      Heading: {
        baseStyle:{
          color: "gray.700",
        },
        defaultProps: {
          size: "lg"
        }
      },
      Text:{
        baseStyle:{
          color: "gray.600",
          fontWeight: "medium"
        },
      },
      Button: {
        defaultProps: {
          variant: "primary"
        },
        variants: {
          selected: {
            backgroundColor: 'blue.500',
            color: 'white'
          },
          primary: {
            backgroundColor: 'indigo',
            color: 'white',
            _hover: {
              backgroundColor: 'lightBlue'
            }
          },
          secondary: {
            backgroundColor: 'indigo',
            color: 'white',
            _hover: {
              backgroundColor: 'lightBlue'
            },
            _active: {
              backgroundColor: 'lightBlue'
            }
          },
          tertiary: {
            backgroundColor: 'white',
            color: 'indigo',
            borderColor: 'indigo',
            _hover: {
              backgroundColor: 'lightBlue'
            }
          }
        }
      }
    },
  },
);