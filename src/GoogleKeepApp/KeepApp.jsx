import React,{useState} from "react";
import "./keepapp.css";
import KeppAppComponent from "./KeepAppComponent";
import Button from '@mui/material/Button';     

function KeepApp() {

const [heading, setheading] = useState("");
const [note_content, setnote_content] = useState("");

const [heading_new, setheading_new] = useState([]);
const [note_content_new, setnote_content_new] = useState([]);

function input_heading(heading_data){
  setheading(heading_data.target.value);
}

function input_note(note_data){
  setnote_content(note_data.target.value)
}

function submit(){

  setheading_new((olddata_heading)=>{
    return[...olddata_heading,heading]; 
  });
  setnote_content_new((olddata_note)=>{
    return[...olddata_note,note_content]
  });

  setheading("");
  setnote_content("");
}

function deleteNote(id){
    setheading_new((olddata_heading)=>{
    return olddata_heading.filter((arrEle,index)=>{
      return index!==id;
    })
    })

    setnote_content_new((olddata_note)=>{
      return olddata_note.filter((arrEleNote,index)=>{
        return index!==id;
      })
    })
    
}


  return (
    <>
      <div className="container my-3">
        <h1 style={{ textAlign: "center" }}>NOTEBOOK</h1>
        <div className="card mx-auto">
          <div className="card-body">
            <div className="mb-3">
              <label for="exampleFormControlInput1" className="form-label">
                TITLE:-
              </label>
              {/*title input */}

              <input type="email" className="form-control" placeholder="What's The Title?" value={heading} onChange={input_heading} />

              {/*title input ens */}
             
            </div>
            <div className="form-floating">

              {/*notice input */}

              <textarea className="form-control my-1"  style={{ height: "3%" }} placeholder="Leave a comment here" value={note_content} onChange={input_note} ></textarea>

              {/*notice input ends*/}

            </div>
            <Button className="btn  my-2" variant="contained"  style={{ backgroundColor: "#ffd86e" }} onClick={submit}> ADD  </Button>
          </div>
        </div>
        <hr />

        <h4>My NOTES:-</h4>


       
        <div id="notes" className="row container">
        <div class="container">
        <div class="row">

         { heading_new.map((val,index)=>{

          const note_val=note_content_new[index]; 

          {/*If at all possible, I would recommend storing the text alongside the images in an array of objects*/}
          {/*If this isn't possible then just map over one array and access the second array's members via the current index:*/}
          {/* for further visite:- https://pretagteam.com/question/how-can-i-map-through-two-arrays-in-react-at-the-same-time */}
             
        
           return (
             <>
             
             <KeppAppComponent
             Title={val}
             note={note_val}
             key={index}
             id={index}
             passFun={deleteNote}

              >
           </KeppAppComponent>
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
export default KeepApp;
