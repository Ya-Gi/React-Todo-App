import {useEffect, useReducer}  from "react";
import React from "react";
import NoteReducer from '../reduces/NoteReducer';

export const NoteContext = React.createContext();

const NoteContextProvider = (props) => {
    const [list, dispatch] = useReducer(NoteReducer,[]);

    useEffect(()=> {
        console.log("getitem")
        const data = JSON.parse(localStorage.getItem("list"));
        if(data){
            dispatch({
                type:"POPULATE_NOTES",
                list:data
            })
        }
    
    },[])
    useEffect(()=>{
        console.log("setitem")
        localStorage.setItem("list",JSON.stringify(list));
    },[list])
    return (
        <NoteContext.Provider value={{ list, dispatch }}>
            { props.children }
        </NoteContext.Provider>
    );

    
}


export default NoteContextProvider;
