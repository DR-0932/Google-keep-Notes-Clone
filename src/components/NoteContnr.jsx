import { useState,useRef,useEffect} from "react";
import Inputbox from "./Inputbox";


export default function NoteContnr(){
  const[notes,setNotes]=useState([]);

 const handleAdd = (newNote) => {
   
  };

  return(
  <div className="min-h-[80vh] text-white border  p-2" >
      <Inputbox onAdd={handleAdd}/>
  </div>
  );
}