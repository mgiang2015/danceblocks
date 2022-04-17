import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import Container from '../components/container';
import Footer from '../components/footer'
import Sidebar from '../components/sidebar'
import styles from './home.module.css'

function Home() {
    return (
    <>
        <div className={styles.circleDisplayManager}>
            <DndProvider backend={HTML5Backend}>
                <Container hideSourceOnDrag={true}/>
            </DndProvider>
            <Sidebar />
        </div>
        <Footer />
    </>
    );
}

export default Home