import styles from './container.module.css'
import { Link } from 'react-router-dom'
import { Typography, Box } from '@mui/material'
import { Link as MuiLink } from '@mui/material'

const Footer = ({ userEmail }) => {
    const LoginField = userEmail && userEmail !== "" ? <Typography>{userEmail}</Typography>
                                                    : <Link to="login">Login</Link>
    
    return (
        <Box className={styles.footer}>
            {LoginField}
            <MuiLink rel="noreferrer" target="_blank" href="https://github.com/mgiang2015/danceblocks">Source Code</MuiLink>
            <MuiLink rel="noreferrer" target="_blank" href="https://mgiang2015.github.io/danceblocks/">User Guide</MuiLink>
            <MuiLink rel="noreferrer" target="_blank" href="https://forms.gle/at19GWgjgwhaVxjX8">Feedback and Suggestions (Google form)</MuiLink>
        </Box>
    )
}

export default Footer