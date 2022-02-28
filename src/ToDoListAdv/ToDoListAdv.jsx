import React,{useState} from "react";
import "./ToDoList.css";
import ToDoAdvComponent from "./ToDoAdvComponent";

function ToDoListAdv() {

     
const [listItem, setlistItem] = useState("");
const [listItem_New, setlistItem_New] = useState([]);

function input(data){
    setlistItem(data.target.value)
}
function submission(){
   setlistItem_New((olddata)=>{
       return [...olddata,listItem];
   });
   setlistItem("")
}  

function deleteItem(id){
  
  setlistItem_New((olddata)=>{
    return olddata.filter((arrElem,index)=>{
      return index !== id;
    })
  })

}


  return (
    <>
      <div class="page-content page-container" id="page-content">
        <div class="padding">
          <div class="row container d-flex justify-content-center">
            <div class="col-md-12">
              <div class="card px-3">
                <div class="card-body">
                  <h4 class="card-title">Awesome Todo list</h4>
                  <div class="add-items d-flex">

                     {/*input*/}

                    <input  type="text" class="form-control todo-list-input"  placeholder="What do you need to do today?" value={listItem} onChange={input} />
                    <button class="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={submission}>  Add    </button>

                     {/*input ends*/}

                  </div>

                  <div class="list-wrapper">
                    <ul class="d-flex flex-column-reverse todo-list">
                      {/* list item*/}

                      {listItem_New.map((interval,index) =>{
                          return ( <ToDoAdvComponent
                             text={interval} 
                              key={index} 
                              id={index}
                              passFun={deleteItem}
                              >
                              </ToDoAdvComponent>
                               

                          )
                      })}
                    
                      {/* list item end*/}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ToDoListAdv;
