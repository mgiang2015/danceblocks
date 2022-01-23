import { useState } from "react"
import { changeCircle, deleteCircle } from "../slices/circlesSlice"
import { useDispatch } from 'react-redux'
import { Button, Typography, TextField } from '@mui/material';
import { HexColorPicker } from 'react-colorful';
import styles from './container.module.css'

const SidebarEntry = ({ id, title, backgroundColor }) => {
    const [editable, setEditable] = useState(false)
    const [currTitle, setCurrTitle] = useState("")
    const [currColor, setCurrColor] = useState("")
    const dispatch = useDispatch()

    const entrySize = "small"

    const toggleEditable = () => {
        setCurrColor("")
        setCurrTitle("")
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

    if (editable) {
        return (
            <div>
                <div className={styles.entryFields}>
                    <TextField size={entrySize} label="Updated Label" placeholder="Dancer Name" onChange={(event) => setCurrTitle(event.target.value)}/>
                    <HexColorPicker color={currColor} onChange={setCurrColor}/>
                </div>
                <Button onClick={submitChanges}>Done</Button>
            </div>
        )
    }

    return (
        <div>
            <Typography className={styles.entryText}>{title}</Typography>
            <Typography className={styles.entryText}>{backgroundColor}</Typography>
            <Button onClick={toggleEditable}>Edit</Button>
            <Button color="error" onClick={handleDelete}>Delete</Button>
        </div>
    )
}

export default SidebarEntry