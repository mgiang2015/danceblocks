import styles from './container.module.css'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <span></span>
            <Link to="login">Login</Link>
            <a rel="noreferrer" target="_blank" href="https://github.com/mgiang2015/danceblocks">Source Code</a>
            <a rel="noreferrer" target="_blank" href="https://mgiang2015.github.io/danceblocks/">User Guide</a>
            <a rel="noreferrer" target="_blank" href="https://forms.gle/at19GWgjgwhaVxjX8">Feedback and Suggestions (Google form)</a>
        </div>
    )
}

export default Footer