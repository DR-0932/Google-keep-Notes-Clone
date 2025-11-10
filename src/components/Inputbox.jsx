import { useState,useRef,useEffect} from "react";
import {Bell, Palette,Type,Users,Image as Img,Download,Undo2,Redo2,X} from "lucide-react";

export default function NoteCard(){
  const [isExpanded,setIsExpanded] = useState(false);
  const [title,setTitle] = useState("");
  const [note,setNote] = useState("");
  const noteRef =useRef();
  const iconStyle = "w-6 h-6 text-gray-400 hover:text-neutral-50 rounded-full hover:bg-neutral-700 cursor-pointer"
  
  useEffect(()=>{
    function handleClickOutside(e){
      if(noteRef.current && !noteRef.current.contains(e.target)){
        setIsExpanded(false);
      }
    }
    document.addEventListener("mousedown",handleClickOutside);
    return ()=>document.removeEventListener("mousedown",handleClickOutside);
  },[]);

  return(
    <div ref={noteRef} className="bg-neutral-800 text-gray-100 w-full max-w-md rounded-xl p-4 shadow-lg border border-gray-600">
      {isExpanded && (
      <input 
        className="w-full bg-transparent text-xl font-semibold outline-none mb-2 placeholder-neutral-300"
        type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Title"
        />
      )}

      <textarea
        className="flex  w-full bg-transparent resize-none outline-none text-xl placeholder-neutral-50 mb-3"
        value={note}
        onChange={(e)=>setNote(e.target.value)}
        placeholder="Take a note"
        rows={1}  
         onClick={()=>{setIsExpanded(true);
        }}
      />
      
      {isExpanded && (
      <div className="flex items-center justify-between text-gray-400">
        <div className="flex gap-3 ">
          
          <Type className={iconStyle}/>
          <Palette className={iconStyle}/>
          <Bell className={iconStyle}/>
          <Img className={iconStyle}/>
          <Download className={iconStyle}/>
        </div>

        <div className="flex items-center gap-3">
          <Undo2 className={iconStyle}/>
          <Redo2 className={iconStyle}/>
          <button className="text-sm text-gray-300 hover:text-neutral-50">Close</button>
        </div>
        
      </div>
      )}
    </div>
    
  )
}