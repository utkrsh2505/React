import './App.css';
import axios from "axios";
import {Header} from "./Components/Header";
import {Input} from "./Components/Input";
import React,{useEffect,useState} from "react";
import { FetchUser } from './Components/FetchUser';
import {ListItem} from "./Components/ListItem";

function App() {
  const [value,setValue] = useState([]);
 
  useEffect(()=>{
   handlefetch();
  },[])

  const handlefetch = ()=>{
    FetchUser()
    .then((res)=>{
      setValue(res.data)
      console.log(res.data);
    
    })
    .catch((err)=>{

    })
  }
  const handleAdd = async(list)=>{
    const payload = {
      title : list,
      id : value.length+1,
      status : false
    
  }
  // console.log(payload);
  if(list === ""){
    alert("please write something")
    return
  }
 list !== "" && (await axios({
    method : "post",
    url : "http://localhost:3001/Todo",
    data : payload,
  }).catch((err)=>{
    console.log(err)
   

  }))
  handlefetch();
 
  }

  const handleDelete = async(id)=>{
    console.log(id);
  await axios({
    method : "delete",
    url : `http://localhost:3001/Todo/${id}`,
  }).catch((err)=>{
    console.log("nhi")
  })
  handlefetch();
  }
  const handleToggle = async(id,data)=>{
    console.log(id,data);
    const payload2 = {
      status :data
    }
 await axios({
   
   method : "patch",
   url : `http://localhost:3001/Todo/${id}`,
   data :payload2,
   
 }).catch((err)=>{
  console.log("nhi")
})
handlefetch();
}
  
  return (
    <div className="App">
     <Header/>
     <Input onTaskCreate={handleAdd} />
     {value.map((item)=>{
       return(
       <ListItem key={item.id} id={item.id} title={item.title} status={item.status} onDelete={handleDelete} onToggle={handleToggle}/>
       )
     })}
    </div>
  );
}

export default App;
