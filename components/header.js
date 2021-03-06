import '@hackclub/theme/fonts/reg.css'
import Link from 'next/link'
import {
  BaseStyles,
  Box,
  Card,
  Container,
  Heading,
  Text,
  Button,
} from 'theme-ui'

export default function Header({ children }) {
  return (
    <Box as="header" sx={{ bg: 'sheet', color: 'text' }}>
      <Container sx={{ pt: 5, pb: [3, 4], textAlign: 'center' }}>
        <Heading as="h1" variant="title" color="red">
          Innovation Accademy
        </Heading>
      </Container>
      <Link href="/">
        <Button variant="outline" sx={{ ml: 3, mr: 3, mb: 3 }}>
          Home
      </Button>
      </Link>
      <Link href="/aboutus">
        <Button variant="outline" sx={{ ml: 3, mr: 3, mb: 3 }}>
          About us
      </Button>
      </Link>

    </Box >
  )
}