import { useState } from "react"
import { changeCircle } from "../slices/circlesSlice"
import { useDispatch } from 'react-redux'

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

    if (editable) {
        return (
            <div>
                <input placeholder="New label" onChange={(event) => setCurrTitle(event.target.value)}/>
                <input placeholder="New Color" onChange={(event) => setCurrColor(event.target.value)}/>
                <button onClick={submitChanges}>Done</button>
            </div>
        )
    }

    return (
        <div>
            <span>{id}</span>
            <span>{title}</span>
            <span>{backgroundColor}</span>
            <button onClick={toggleEditable}>Edit</button>
        </div>
    )
}

export default SidebarEntry