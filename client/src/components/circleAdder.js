import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCircle } from "../slices/circlesSlice"
import { Button, TextField, Typography } from '@mui/material';
import { HexColorPicker } from 'react-colorful';
import styles from './container.module.css'

const CircleAdder = () => {
    const [adding, setAdding] = useState(false)
    const [currTitle, setCurrTitle] = useState("")
    const [currColor, setCurrColor] = useState("")
    const dispatch = useDispatch()

    const defaultTitle = "New Dancer"
    const defaultColor = "#7d3c98"
    const defaultTop = 20
    const defaultLeft = 20

    const entrySize = "small"

    const toggleAdd = () => {
        setAdding(!adding)
        setCurrTitle("")
        setCurrColor("")
    }

    const handleSubmit = () => {
        dispatch(addCircle({
            title: currTitle !== "" ? currTitle : defaultTitle,
            backgroundColor: currColor !== "" ? currColor : defaultColor,
            top: defaultTop,
            left: defaultLeft,
        }))
        toggleAdd()
    }

    if (!adding) {
        return <Button onClick={toggleAdd}>Add a circle</Button>
    }

    return (
        <div>
            <div className={styles.entryFields}>
                <TextField size={entrySize} label="Label" placeholder="Dancer Name" onChange={(event) => setCurrTitle(event.target.value)}/>
                <Typography className={styles.entryText}>Color</Typography>
                <HexColorPicker color={currColor} onChange={setCurrColor}/>
            </div>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default CircleAdder