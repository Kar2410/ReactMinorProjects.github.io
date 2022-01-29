import React,{useState} from "react";
import "./form.css";

function Form() {

   const [user, setuser] = useState("");
   const [pass, setpass] = useState("");

   const [user_new, setuser_new] = useState("");
   const [pass_new, setpass_new] = useState("");


    function username(data_user){
           var x= "Hello, "+ data_user.target.value + " Welcome";
           setuser(x) // it set the value of "user" variable = x and in "x" i am getting live data from form using "data_user.target.value"

        //    OR
        // setuser(data_user.target.value)  
    }

    function password(data_pass){
      var y="Your Password is " + data_pass.target.value;
      setpass(y) 

         //    OR
        // setpass(data_user.target.value)  
    }

    function submission(event){
        event.preventDefault();  // to prevent page refresh after form submission
        setuser_new(user);
        setpass_new(pass);
        alert("Form Submitted Successfully.!!!")
    }

  return (
    <>

<h1>{user_new}</h1>
<h2>{pass_new} </h2>

    <br></br>



    <div className="login_form">
  <div className="details">
    <div className="welcome">Welcome</div>
    <form onSubmit={submission}>
      <div className="wrap">
        <label>Name</label>
        <input type="text" className="input" onChange={username} />
      </div>
      <div className="wrap">
        <label>Password</label>
        <input type="password" className="input" data-type="password" onChange={password}/>
      </div>
      <div className="wrap">
        <label>Forgot password?</label>
      </div>
      <button type="submit" className="button">
        <h1 className="sign">Sign in!</h1>
      </button>
    </form>
  </div>
 
  <div className="details-two">
    <h1 className="back">Welcome back!</h1>
    <p className="log">Log in and use the opportunities offered by our portal.</p>
    <h2 className="acc">You dont have an account?<br></br>Create</h2>
    <button className="customer">
      <h3>Customer Account</h3>
    </button>
    <button className="res">
      <h3>Restaurant Account</h3>
    </button>
  </div>

</div>
    </>
  );
}

export default Form;
