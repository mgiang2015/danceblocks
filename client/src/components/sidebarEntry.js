import { useState } from "react"

const SidebarEntry = ({ id, title, backgroundColor }) => {
    const [editable, setEditable] = useState(false)
    const [currTitle, setCurrTitle] = useState("")
    const [currColor, setCurrColor] = useState("")

    const toggleEditable = () => {
        setEditable(!editable)
    }

    if (editable) {
        return (
            <div>
                <input placeholder="New label" />
                <input placeholder="New Color" />
                <button onClick={toggleEditable}>Done</button>
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