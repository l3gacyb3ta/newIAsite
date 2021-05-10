import { Heading } from 'theme-ui'
import FCard from '../components/fcard'
import Header from '../components/header'
import style from '../styles/utilities.module.css'
import Link from 'next/link'

function Error({ statusCode }) {
    const wikiLink = "https://wikipedia.com/wiki/Error_" + statusCode
    return (
        <>
            <Header />

            <FCard>
                <Heading variant="headline" className={style.centerText}>
                    Error <Link href={wikiLink}><a>{statusCode}</a></Link>
                </Heading>
            </FCard>

        </>
    )
}

Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404

    return { statusCode }
}

export default Error
