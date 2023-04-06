import { useContext, useState } from 'react'
import {NoteContext} from '../context/NoteContext';


const AddNode = () => {
    const [title,setTitle] = useState('');
    const [description,setDescription] = useState('');
    const {dispatch,list} = useContext(NoteContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch({
            type: "ADD_NOTE",
            id: list.length+1, title: title,description:description
      
          });
        setTitle('');
        setDescription('');
    }

    return(
        <div>
            <form onSubmit={ handleSubmit }>
                <input type="text" placeholder='Başlık' value={title} onChange={(e)=> setTitle(e.target.value)}/>
                <input type="text" placeholder='Açıklama' value={description} onChange={(e)=> setDescription(e.target.value)}/>
                <input type="submit" value="Add Note" />
            </form>
        </div>
    );
}
export default AddNode;