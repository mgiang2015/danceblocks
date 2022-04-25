import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Button, TextField, Typography } from '@mui/material';
import { HexColorPicker } from 'react-colorful';
import styles from './container.module.css'
import { addCircleToStore } from '../util/circleUtil';

const CircleAdder = () => {
    const defaultTitle = "New Dancer"
    const defaultColor = "#7d3c98"
    const [adding, setAdding] = useState(false)
    const [currTitle, setCurrTitle] = useState(defaultTitle)
    const [currColor, setCurrColor] = useState(defaultColor)
    const entrySize = "small"
    const dispatch = useDispatch()

    const toggleAdd = () => {
        setAdding(!adding)
        setCurrTitle(defaultTitle)
        setCurrColor(defaultColor)
    }

    const handleSubmit = () => {
        addCircleToStore({ dispatchCallback: dispatch, title: currTitle, color: currColor})
        toggleAdd()
    }

    if (!adding) {
        return <Button size={entrySize} onClick={toggleAdd}>Add a circle</Button>
    }

    return (
        <div>
            <div className={styles.entryFields}>
                <TextField size={entrySize} label="Label" placeholder="Dancer Name" onChange={(event) => setCurrTitle(event.target.value)}/>
                <Typography className={styles.entryText}>Color</Typography>
                <HexColorPicker color={currColor} onChange={setCurrColor}/>
            </div>
            <Button size={entrySize} onClick={handleSubmit}>Submit</Button>
            <Button size={entrySize} onClick={toggleAdd} color={"error"}>Cancel</Button>
        </div>
    )
}

export default CircleAdder