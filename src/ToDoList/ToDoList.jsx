import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [headings, setheadings] = useState("");
  const [items, setitems] = useState([]);


  function todo(data) {
    setheadings(data.target.value);
  }

  function add_item() {
    setitems((olditems) => {
      return [...olditems, headings];
    });

    setheadings(""); // this is just to make input filed empty again ,after writing and hiting add button
  }
  




  return (
    <>
      <div className="page-content page-container" id="page-content">
        <div className="padding">
          <div className="row container d-flex justify-content-center">
            <div className="col-md-12">
              <div className="card px-3">
                <div className="card-body">
                  <h4 className="card-title">Awesome Todo list</h4>
                  <div className="add-items d-flex">

                      {/*input*/}

                    <input type="text" className="form-control todo-list-input"  placeholder="What do you need to do today?"  onChange={todo}  value={headings} />
                    <button className="add btn btn-primary font-weight-bold todo-list-add-btn" onClick={add_item} > Add </button>
                    
                    {/*input ends*/}
                    
                  </div>

                  {/*liststart */}

                  <div className="list-wrapper">
                    <ul className="d-flex flex-column-reverse todo-list">
                      {items.map((interval) => {
                        return (
                          <>
                       
                           <li  className="">
                         
                              <div className="form-check">
                                <label className="form-check-label">
                                  <input className="checkbox" type="checkbox" />
                                  {interval} 
                                  <i className="input-helper"   ></i>
                                </label>
                              </div>
                              <i className="remove mdi mdi-close-circle-outline"></i>
                            </li>
                          </>
                        );
                      })}
                    </ul>                  
                  </div>

                   {/*listends */}
                   
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToDoList;
