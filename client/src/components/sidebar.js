import { useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import Table from './table'
import { selectCircles } from '../slices/circlesSlice';

// Sidebar is in charge of displaying information (title and color) of existing circles,
// and allow users to change those
const Sidebar = () => {
    const state = useSelector(selectCircles)
    const circles = state.value
    const dispatch = useDispatch()

    const columns = useMemo(() => [
        {
            Header: "Label",
            accessor: "label"
        },
        {
            Header: "Color",
            accessor: "backgroundColor"
        }
    ])

    const data = useMemo(() => {
        return Object.keys(circles).map((key) => {
            const { top, left, backgroundColor, title } = circles[key];
            return {
                label: title,
                backgroundColor: backgroundColor
            }
        })
    })

    return (
        <Table columns={columns} data={data} />
    )
}

export default Sidebar