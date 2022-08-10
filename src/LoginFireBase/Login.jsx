import React,{useState} from 'react';
import './style.css';


//////

function Login(){

 
  const [name, setname] = useState("");
  const [name_user, setname_user] = useState("Login");
  const [pass, setpass] = useState("");

  function username(data){
      setname(data.target.value)
  }

  function password(pass_data){
        setpass(pass_data.target.value)
  }
  function submission(event){
      event.preventDefault();
     
      setname("")
      setpass("")
      if(name=="Kartik" && pass=="123"){     
        setname_user("Welcome "+name)
        alert("Loged in")
      }
      else{
         setname_user("You Are Not Authorised..!!")
      }
   
  }
    return(
        <>
        <h3>username=Kartik</h3>
        <h3>Password=123</h3>
        <div className="log">
        <h2> {name_user}</h2>
        <form onSubmit={submission}>
          <div className="input-cont">
            <input type="text" value={name} onChange={username}/>
            <label>Username</label>
            <div className="border1"></div>
          </div>
          <div className="input-cont">
            <input type="password" value={pass}  onChange={password}/>
            <label>Password</label>
            <div className="border2"></div>
          </div>
          <span className="check">
            <input type="checkbox"/> <label>Remember Me</label>
          </span>
          <a href="#">Forgot Password</a>
          <div className="clear"></div>
          <input type="submit" value="Sign In"/>
        </form>
      </div>
   
        </>
    )
}
export default Login;