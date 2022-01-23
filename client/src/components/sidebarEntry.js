import { useState } from "react"
import { changeCircle, deleteCircle } from "../slices/circlesSlice"
import { useDispatch } from 'react-redux'
import { Button, Typography, TextField } from '@mui/material';
import { HexColorPicker } from 'react-colorful';
import styles from './container.module.css'

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
        dispatch(changeCircle({
            id: id,
            title: dispatchTitle,
            backgroundColor: dispatchBackgroundColor,
        }))
        toggleEditable()
    }

    const handleDelete = () => {
        // dispatch a delete action
        dispatch(deleteCircle({ id }))
    }

    const colorDisplayStyle = {
        width: '1em',
        height: '1em',
        backgroundColor: currColor
    }

    if (editable) {
        return (
            <div>
                <div className={styles.entryFields}>
                    <TextField size={entrySize} label="Updated Label" placeholder="Dancer Name" onChange={(event) => setCurrTitle(event.target.value)}/>
                    <Typography className={styles.entryText}>Color</Typography>
                    <HexColorPicker color={currColor} onChange={setCurrColor}/>
                </div>
                <Button onClick={submitChanges}>Done</Button>
            </div>
        )
    }

    return (
        <div>
            <div className={styles.sidebarEntryInfo}>
                <Typography className={styles.entryText}>{title}</Typography>
                <div style={colorDisplayStyle}></div>
            </div>
            <Button onClick={toggleEditable}>Edit</Button>
            <Button color="error" onClick={handleDelete}>Delete</Button>
        </div>
    )
}

export default SidebarEntry