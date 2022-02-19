import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Container from '../components/container';

function Home() {
    return (
    <div>
        <DndProvider backend={HTML5Backend}>
            <Container hideSourceOnDrag={true}/>
        </DndProvider>
    </div>
    );
}

export default Home