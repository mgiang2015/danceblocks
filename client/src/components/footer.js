import Link from '@mui/material/Link';
import styles from './container.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <Link target="_blank" href="https://github.com/mgiang2015/danceblocks">Source Code</Link>
            <Link target="_blank" href="https://mgiang2015.github.io/danceblocks/">User Guide</Link>
            <Link target="_blank" href="https://forms.gle/at19GWgjgwhaVxjX8">Feedback and Suggestions (Google form)</Link>
        </div>
    )
}

export default Footer