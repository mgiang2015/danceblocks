import { useDrag } from 'react-dnd'
import ItemTypes from '../itemTypes';
import { Typography } from '@mui/material';

const Circle = ({ id, left, top, backgroundColor, title, hideSourceOnDrag, }) => {
    // wire component as a drag source!
    const [{ isDragging }, drag] = useDrag(() => ({
        type: ItemTypes.CIRCLE,
        item: { id, left, top },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
    }), [id, left, top]);

    // styling for circle not dragging
    const circleStyle = {
        position: 'absolute',
        backgroundColor: backgroundColor,
        width: '3em',
        height: '3em',
        borderRadius: '50%',
    };

    const circleContainerStyle = {
        position: 'absolute',
        cursor: 'move',
    }
    
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag}/>;
    }

    return (
        <div ref={drag} style={{ ...circleContainerStyle, left, top }} >
            <Typography>{title}</Typography>
            <div style={{ ...circleStyle }}></div>
        </div>
    );
};

export default Circle