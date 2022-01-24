import { useSelector } from 'react-redux'
import { selectCircles } from '../slices/circlesSlice';
import CircleAdder from './circleAdder';
import SidebarEntry from './sidebarEntry';
import styles from './container.module.css'

// Sidebar is in charge of displaying information (title and color) of existing circles,
// and allow users to change those
const Sidebar = () => {
    const state = useSelector(selectCircles)
    const circles = state.value

    return (
        <div className={styles.sidebar}>
            <CircleAdder />
            {Object.keys(circles).map((key) => {
                const { backgroundColor, title } = circles[key];
                return (
                    <SidebarEntry key={key} id={key} backgroundColor={backgroundColor} title={title} />
                )
            })}
        </div>
    )
}

export default Sidebar