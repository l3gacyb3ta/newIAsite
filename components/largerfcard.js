import '@hackclub/theme/fonts/reg.css'
import {
    BaseStyles,
    Card,
    Container,
} from 'theme-ui'

export default function LargerFCard({ children }) {
    return (
        <Container>
            <Card as={BaseStyles} sx={{ mt: [3, 4], p: { fontSize: 4 } }}>
                {children}
            </Card>
        </Container>
    )
}

