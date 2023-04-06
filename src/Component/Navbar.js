import { useContext } from "react";
import {NoteContext} from '../context/NoteContext';

const Navbar = () => {

    const {list} = useContext(NoteContext);

    return (
        <div className="navbar">
            <h1>NodeApp</h1>
            <p>Toplam {list.length} adet not mevcut.</p>
        </div>
    );

}
export default Navbar