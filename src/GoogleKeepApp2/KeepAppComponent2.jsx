import React from 'react';
import './keepapp.css';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';



function KeppAppComponent2(props){
   
  const DateTime= new Date().toDateString()
   
    return(
        <>
  
          <div class="col-lg-4">
            <div class="card card-margin">
              <div class="card-header no-border"></div>
              <div class="card-body pt-0" style={{ marginTop: "-30px" }}>
                <div class="widget-49">
                  <div class="widget-49-title-wrapper">
                  
                    <div class="widget-49-meeting-info">
                      <span class="widget-49-pro-title" style={{fontWeight:'bold',fontSize:'30px'}}> {props.Title}</span>
                      <span class="widget-49-meeting-time"></span>{DateTime}
                    </div>
                  </div>
                  <ol class="widget-49-meeting-points" style={{fontSize:'20px'}}>
                     {props.content}
                  </ol>
                  <div class="widget-49-meeting-action">

                  <Button  className="btn  my-2" variant="contained" color="error" size="small"  onClick={()=>{
                    props.passFun(props.id)
                  }} >
                  <DeleteIcon/>
                </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      
     
        </>
    )
}
export default KeppAppComponent2;