import Note from "./Note";
import { useContext } from "react";
import {NoteContext} from '../context/NoteContext';


const NoteList=() => {
    const {list,dispatch} = useContext(NoteContext);
    return list.length>0 ?(
        <div className='node-list'>
        <ul >
        { list.map((note)=>{ return (<Note note={note} dispatch={dispatch} key={note.id}/>); }) }
        </ul>
        </div>
    ):
    (
        <div className="empty">Henüz not eklemediniz.</div>
    );
}
export default NoteList;


