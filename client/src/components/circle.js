import { useDrag } from 'react-dnd'
import ItemTypes from '../itemTypes';


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
    const style = {
        position: 'absolute',
        backgroundColor: backgroundColor,
        width: '3em',
        height: '3em',
        borderRadius: '50%',
        cursor: 'move',
    };    
    
    if (isDragging && hideSourceOnDrag) {
        return <div ref={drag}/>;
    }

    return (
        <div ref={drag} style={{ ...style, left, top }} >
            {title}
        </div>
    );
};

export default Circle