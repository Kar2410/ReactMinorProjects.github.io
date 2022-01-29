import React, { useState } from "react";
import "./ToDoList.css";

function ToDoAdvComponent(props) {
  const [checked, setchecked] = useState(false);

  function completed() {
    setchecked(true);
  }

  return (
    <>
      <li className={checked ? "completed" : ""}>
        
        {/* this is done bcz : if "checked" is true then cls name become "completed" and it will cut the sentence otherwise className name  will remain empty*/}
        <div className="form-check">
          <label className="form-check-label">
            <input className="checkbox" type="checkbox" onClick={completed} />
            {props.text}
            <i className="input-helper"></i>
          </label>
        </div>
        <i className="remove mdi mdi-close-circle-outline" onClick={()=>{
          props.passFun(props.id);{/* here i am passing the "id" in the"deleteItem" function. here "props.passFun" is the "deleteItem" and in that funtion i am passing the id using "props.id" */}
        }}></i>
      </li>
    </>
  );
}

export default ToDoAdvComponent;
