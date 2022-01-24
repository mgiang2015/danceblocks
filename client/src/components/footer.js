import styles from './container.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            <a rel="noreferrer" target="_blank" href="https://github.com/mgiang2015/danceblocks">Source Code</a>
            <a rel="noreferrer" target="_blank" href="https://mgiang2015.github.io/danceblocks/">User Guide</a>
            <a rel="noreferrer" target="_blank" href="https://forms.gle/at19GWgjgwhaVxjX8">Feedback and Suggestions (Google form)</a>
        </div>
    )
}

export default Footer