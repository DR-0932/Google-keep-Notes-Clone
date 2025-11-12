import { useState,useRef,useEffect} from "react";
import {Bell, Palette,Type,Users,Image as Img,Download,Undo2,Redo2,X} from "lucide-react";

export default function Inputbox({onAdd,initialNote="",initialTitle=""}){
  const [isExpanded,setIsExpanded] = useState(false);
  const [title, setTitle] = useState(initialTitle);
  const [note, setNote] = useState(initialNote);;
  const noteRef =useRef();
  const iconStyle = "w-6 h-6 text-gray-400 hover:text-neutral-50 rounded-full hover:bg-neutral-700 cursor-pointer"
  const textareaRef = useRef();
//function for handling closing of collapsing inputbox, when mouseclicks outside the inputbox 
  useEffect(()=>{
    function handleClickOutside(e){
      if(noteRef.current && !noteRef.current.contains(e.target)){
        setIsExpanded(false);
      }
    }
    document.addEventListener("mousedown",handleClickOutside);
    return ()=>document.removeEventListener("mousedown",handleClickOutside);
  },[note,title,onAdd]);

//TO increase the vertical height of div instead of scrollbar
  useEffect(()=>{
    const el =  textareaRef.current;
    if(el){
      el.style.height ="auto"; // to understand this
      el.style.height=el.scrollHeight+"px";
    }
  },[note]);

  const handleClose=()=>{
    
  };


  return(
    <div ref={noteRef} className="bg-[#202125] text-gray-300 w-full max-w-[566px] rounded-lg px-4 py-3  border border-[#545659] ">
      {isExpanded && (
      <input 
        className="w-full bg-transparent text-xl font-semibold outline-none mb-2 placeholder-[#a3a2a5]"
        type="text"
        value={title}
        onChange={(e)=>setTitle(e.target.value)}
        placeholder="Title"
        />
      )}

      <textarea
        ref= {textareaRef}
        className="flex overflow-hidden w-full bg-transparent resize-none outline-none text-xl  mb-3 placeholder-[#a3a2a5] transition-all"
        value={note}
        onChange={(e)=>setNote(e.target.value)}
        placeholder="Take a note..."
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
          <button 
          onClick={handleClose}
          className="text-sm text-gray-300 hover:text-neutral-50">Close</button>
        </div>
          
        
      </div>
      )}
    </div>
    
  )
}