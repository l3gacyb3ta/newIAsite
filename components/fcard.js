import '@hackclub/theme/fonts/reg.css'
import {
  BaseStyles,
  Box,
  Card,
  Container,
  Heading,
  Link,
  Text,
} from 'theme-ui'

export default function FCard({ children }) {
  return (
    <Container>
      <Card as={BaseStyles} sx={{ mt: [3, 4], p: { fontSize: 2 } }}>
        {children}
      </Card>
    </Container>
  )
}