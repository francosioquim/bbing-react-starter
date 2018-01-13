import { createMuiTheme } from 'material-ui/styles'
import green from 'material-ui/colors/green'
import grey from 'material-ui/colors/grey'

const fontWeightSemiBold = 700
const primary = {
  50: '#ede7f6',
  100: '#d1c4e9',
  200: '#b39ddb',
  300: '#9575cd',
  400: '#7e57c2',
  500: '#673ab7',
  600: '#5e35b1',
  700: '#512da8',
  800: '#4527a0',
  900: '#311b92',
  A100: '#b388ff',
  A200: '#7c4dff',
  A400: '#651fff',
  A700: '#6200ea',
  contrastDefaultColor: 'light',
}

const theme = createMuiTheme({
  palette: {
    primary,
    secondary: green,
  },
  status: {
    danger: 'orange',
  },
  typography: {
    fontFamily: '\'Alegreya Sans\', sans-serif',
    color: grey[300],
    title: {
      fontSize: '2rem',
      lineHeight: 2,
      fontWeight: fontWeightSemiBold,
      color: primary[500],
    },
    subheading: {
      fontSize: '1.4rem',
      lineHeight: 2,
      fontWeight: fontWeightSemiBold,
      color: grey[900],
      textAlign: 'left',
    },
  },
})

export default theme
