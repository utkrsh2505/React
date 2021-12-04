import { useState } from "react";

const ListItem = ({title,id,status,onDelete,onToggle})=>{
    useState(()=>{

    },[])
    const del = ()=>{
      
        onDelete(id);
    }
    const Toggle = ()=>{
    onToggle(id,!status)
    }
    return(
        <>
        <div className="list" key={id}>{` ${title } ${status}`}
        <button onClick={del}>Delete</button>
        <button onClick={Toggle}>Toggle Status</button>
        </div>

        </>
    )
}
export {ListItem};