import '../styles/globals.css'
import {
  BaseStyles,
  Badge,
  Box,
  Button,
  Card,
  Checkbox,
  Container,
  Flex,
  Grid,
  Heading,
  Input,
  Label,
  Link,
  NavLink,
  Radio,
  Select,
  Slider,
  Text,
  Textarea
} from 'theme-ui'
import Head from 'next/head'
import theme from '@hackclub/theme'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
