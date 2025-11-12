import Inputbox from "./components/Inputbox";
import NoteContnr from "./components/NoteContnr"

export default function App() {
  return (<div className="min-h-screen bg-[#202125]">
    <div className=" min-h-[10vh] bg-[#202125] flex items-start justify-center p-4 ">
      <Inputbox/>

    </div>
    
    <div className="  w-full bg-[#202125]  border-red-500">
      <NoteContnr/>
    </div>
    
  </div>);
} 