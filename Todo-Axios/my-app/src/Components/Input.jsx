import React,{useState} from "react";
const Input = ({onTaskCreate})=>{
    const [list,setList] = useState("");
    const handleChange = (e)=>{
        e.preventDefault();
        setList(e.target.value);
      //  console.log(list);

    }
    const handleSubmit = ()=>{
     onTaskCreate(list);
     setList("");
    
    }
return(
    <>
    <div>
        <input type="text" placeholder="Write Items" value={list} onChange={handleChange} className="input-box" />
        <button className="input-btn" onClick={handleSubmit}>Add Items</button>
    </div>
    </>
)
}
export {Input}