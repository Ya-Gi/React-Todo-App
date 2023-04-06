import { useContext } from "react";
import {NoteContext} from '../context/NoteContext';

const Note = ({note}) => {

    const {dispatch } = useContext(NoteContext);
    
    const removeNote = (id) => {
        // setList(list.filter((note)=> note.id !== id));
        dispatch({
            type:"REMOVE_NOTE",
            id
    
        })
    }
    
    
        return (<li onClick={() => removeNote(note.id)} key={note.id}>
            <h3 className="title">{note.title}</h3>
            <p>{note.description}</p>
            </li>);

    
}
export default Note;