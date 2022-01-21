import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCircle } from "../slices/circlesSlice"
import Button from '@mui/material/Button';

const CircleAdder = () => {
    const [adding, setAdding] = useState(false)
    const [currTitle, setCurrTitle] = useState("")
    const [currColor, setCurrColor] = useState("")
    const dispatch = useDispatch()

    const defaultTitle = "New Dancer"
    const defaultColor = "#7d3c98"
    const defaultTop = 20
    const defaultLeft = 20

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
            <input placeholder="Label" onChange={(event) => setCurrTitle(event.target.value)}/>
            <input placeholder="Color" onChange={(event) => setCurrColor(event.target.value)}/>
            <Button onClick={handleSubmit}>Submit</Button>
        </div>
    )
}

export default CircleAdder