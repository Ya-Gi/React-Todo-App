import AddNode from './AddNode';
import Navbar from './Navbar';
import NoteList from './NoteList'
import NoteContextProvider from '../context/NoteContext';
import '../index.css'


const NodeApp = () => {
    
    return(
        <NoteContextProvider >
            <div className='container'>
                <Navbar />
                <NoteList />
                <AddNode />
            </div>
        </NoteContextProvider>
    );
}
export default NodeApp ;


