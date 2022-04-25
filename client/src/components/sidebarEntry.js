import { useState } from "react"
import { useDispatch } from 'react-redux'
import { Button, Typography, TextField, Box } from '@mui/material';
import { HexColorPicker } from 'react-colorful';
import styles from './container.module.css'
import { updateCircleInStore } from '../util/circleUtil';
import { deleteCircleFromStore } from '../util/circleUtil';

const SidebarEntry = ({ id, title, backgroundColor }) => {
    const [editable, setEditable] = useState(false)
    const [currTitle, setCurrTitle] = useState(title)
    const [currColor, setCurrColor] = useState(backgroundColor)
    const dispatch = useDispatch()

    const entrySize = "small"

    const toggleEditable = () => {
        setCurrColor(backgroundColor)
        setCurrTitle(title)
        setEditable(!editable)
    }

    const submitChanges = () => {
        // dispatch all the changes
        const dispatchTitle = currTitle !== "" ? currTitle : title
        const dispatchBackgroundColor = currColor !== "" ? currColor : backgroundColor
        updateCircleInStore({ dispatchCallback: dispatch, id: id, title: dispatchTitle, backgroundColor: dispatchBackgroundColor })
        toggleEditable()
    }

    const handleDelete = () => {
        // dispatch a delete action
        deleteCircleFromStore({ dispatchCallback: dispatch, id: id })
    }

    const colorDisplayStyle = {
        width: '1em',
        height: '1em',
        backgroundColor: currColor
    }

    if (editable) {
        return (
            <Box>
                <Box className={styles.entryFields}>
                    <TextField size={entrySize} label="Updated Label" placeholder="Dancer Name" onChange={(event) => setCurrTitle(event.target.value)}/>
                    <Typography className={styles.entryText}>Color</Typography>
                    <HexColorPicker color={currColor} onChange={setCurrColor}/>
                </Box>
                <Button size={entrySize} onClick={submitChanges}>Done</Button>
            </Box>
        )
    }

    return (
        <Box>
            <Box className={styles.sidebarEntryInfo}>
                <Typography className={styles.entryText}>{title}</Typography>
                <Box style={colorDisplayStyle}></Box>
            </Box>
            <Button size={entrySize} onClick={toggleEditable}>Edit</Button>
            <Button size={entrySize} color="error" onClick={handleDelete}>Delete</Button>
        </Box>
    )
}

export default SidebarEntry