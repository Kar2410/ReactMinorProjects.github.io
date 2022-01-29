import React from 'react'
import {useParams} from 'react-router-dom'

 function User(){

 const {FirstName, LastName} =useParams();  {/* this is only because if user serach for perticular name on url " eg kartik/verma" */}
     return(
         <>

        

        <h1 style={{ textAlign: 'center', fontSize: 'bold', marginTop: '100px'}}> This is {FirstName} {LastName} page</h1>

         </>
     )
 }

 export default User;