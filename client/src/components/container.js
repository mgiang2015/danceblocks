import { useDrop } from 'react-dnd'
import { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import update from 'immutability-helper';
import ItemTypes from '../itemTypes';
import Circle from './circle'
import { selectCircles, moveCircle } from '../slices/circlesSlice';

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
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
        position: 'relative',
    };

    // get circles from store
    const circles = useSelector(selectCircles)
    const dispatch = useDispatch()

    // define callback invoked when a circle is moved
    const moveCircle = useCallback((id, left, top) => {
        dispatch(moveCircle(id, left, top))
    })

    // hook to call when an object is dropped. Any component with this ref will be wired as a drop target
    const [, drop] = useDrop(() => ({
        accept: ItemTypes.CIRCLE,
        drop(item, monitor) {
            const delta = monitor.getDifferenceFromInitialOffset();
            const left = Math.round(item.left + delta.x);
            const top = Math.round(item.top + delta.y);
            moveCircle(item.id, left, top);
            return undefined;
        },
    }), [moveCircle]);

    return (
    <div ref={drop} style={style}>
        { /* Map each key-value in circles map to a Circle */}
        {Object.keys(circles).map((key) => {
            const { left, top, backgroundColor, title } = circles[key];
            return (
                <Circle key={key} id={key} title={title} left={left} top={top} backgroundColor={backgroundColor} hideSourceOnDrag={hideSourceOnDrag} />
            );})}
    </div>
    );
};

export default Container