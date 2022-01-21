import { useState } from "react"
import { changeCircle, deleteCircle } from "../slices/circlesSlice"
import { useDispatch } from 'react-redux'
import Button from '@mui/material/Button';

const SidebarEntry = ({ id, title, backgroundColor }) => {
    const [editable, setEditable] = useState(false)
    const [currTitle, setCurrTitle] = useState("")
    const [currColor, setCurrColor] = useState("")
    const dispatch = useDispatch()

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
                <input placeholder="New label" onChange={(event) => setCurrTitle(event.target.value)}/>
                <input placeholder="New Color" onChange={(event) => setCurrColor(event.target.value)}/>
                <Button onClick={submitChanges}>Done</Button>
            </div>
        )
    }

    return (
        <div>
            <span>{id}</span>
            <span>{title}</span>
            <span>{backgroundColor}</span>
            <Button onClick={toggleEditable}>Edit</Button>
            <Button color="error" onClick={handleDelete}>Delete</Button>
        </div>
    )
}

export default SidebarEntry