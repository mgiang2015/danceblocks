import { useDrop } from 'react-dnd'
import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import ItemTypes from '../itemTypes';
import Circle from './circle'
import { selectCircles, moveCircle } from '../slices/circlesSlice';
import Sidebar from './sidebar'
import styles from './container.module.css'

function getWindowDimensions() {
    var { innerWidth: width, innerHeight: height } = window;
    width = width * 0.8
    return {
      width,
      height
    };
}

const Marking = ({ top, left }) => {
    const style = {
        position: 'absolute',
        top: top,
        left: left,
        backgroundColor: 'red',
        width: '0.5em',
        height: '2em',
    }

    return (
        <div style={style} />
    )
}

const Container = ({ hideSourceOnDrag }) => {
    // Get windows size to set style
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }
    
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const style = {
        width: windowDimensions.width,
        height: windowDimensions.height,
        border: '1px solid black'
    };

    // get circles from store
    const state = useSelector(selectCircles)
    const circles = state.value
    const dispatch = useDispatch()

    // define callback invoked when a circle is moved
    const updateCircle = useCallback((id, left, top) => {
        dispatch(moveCircle({ id, left, top }))
    })

    // hook to call when an object is dropped. Any component with this ref will be wired as a drop target
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.CIRCLE,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            updateCircle(item.id, left, top)
            return undefined;
        },
    }), [updateCircle]);

    return (
    <div className={styles.wrapper}>
        <Marking top={0} left={windowDimensions.width * 0.5} />
        <Marking top={windowDimensions.height * 0.5} left={windowDimensions.width * 0.5} />
        <Marking top={windowDimensions.height} left={windowDimensions.width * 0.5} />
        <div ref={drop} style={style}>
            { /* Map each key-value in circles map to a Circle */}
            {Object.keys(circles).map((key) => {
                const { top, left, backgroundColor, title } = circles[key];
                return (
                    <Circle key={key} id={key} title={title} left={left} top={top} backgroundColor={backgroundColor} hideSourceOnDrag={hideSourceOnDrag} />
                );})}
        </div>
        <Sidebar />
    </div>
    );
};

export default Container