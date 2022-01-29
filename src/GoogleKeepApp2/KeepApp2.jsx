import React,{useState} from "react";
import "./keepapp.css";
import KeppAppComponent2 from "./KeepAppComponent2";
import Button from '@mui/material/Button';



function KeepApp2() {

const [note, setnote] = useState({
  title:"",
  content:"",
}); 

const [addNote, setaddNote] = useState([])

function inputEvent(data){

    const {name,value}= data.target;
    setnote((olddata)=>{
    return{...olddata,[name]:value,}; {/* jab inpute me name name se match hoga to uske andar value chala jaeyga */}
  });

}

function submit(){
      
  setaddNote((olddata_note)=>{
    return[...olddata_note,note]
  })
  setnote({
    title:"",
    content:"",
  })

}

function deleteNote(id){

   setaddNote((olddata)=>{
     return olddata.filter((arrEle,index)=>{
       return index!==id;
     })
   })

}

  return (
    <>
      <div className="container my-3">
        <h1 style={{ textAlign: "center" }}>NOTEBOOK 2</h1>
        <div className="card mx-auto">
          <div className="card-body">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                TITLE:-
              </label>
              {/*title input */}

              <input type="email" className="form-control" placeholder="What's The Title?" name="title" value={note.title} onChange={inputEvent} />

              {/*title input ens */}
             
            </div>
            <div className="form-floating">

              {/*notice input */}

              <textarea className="form-control my-1"  style={{ height: "3%" }} placeholder="Leave a comment here" name="content" value={note.content} onChange={inputEvent}></textarea>

              {/*notice input ends*/}

            </div>
            <Button className="btn  my-2" style={{ backgroundColor: "#ffd86e" }}   variant="contained"   onClick={submit}> ADD</Button>
          </div>
        </div>
        <hr />

        <h4>My NOTES:-</h4>


       
        <div id="notes" className="row container">
        <div class="container">
        <div class="row">
        {
           addNote.map((val,index)=>{
             return(
               <>
               <KeppAppComponent2
                Title={val.title}
                content={val.content}
                key={index}
                id={index}
                passFun={deleteNote}
                  
               ></KeppAppComponent2>
               </>
             )
           })
          }  
               
        
         </div>
         </div>
         </div>
      </div>
    </>
  );
}
export default KeepApp2;
