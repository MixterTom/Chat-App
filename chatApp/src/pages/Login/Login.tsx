import { ChangeEvent, Component, useState } from 'react'
import './Login.scss'
import axios, { AxiosResponse } from 'axios';

export function Login(){
    const[flag,setFlags] =useState<AxiosResponse>();
    const[code,setCode] = useState();
    function codesend(e: any){
        setCode(e.target.value);
    }
    function testing(){
     postCode();
     getCode();
     if(flag == true){
        window.location.replace('')
     }
     else{
        var errorCode = document.querySelector('.nameeffect')
        errorCode?.classList.add('red');
     }
    }
    async function postCode(){
         await axios.post('/login',codesend)
        }
    async function getCode() {
        const temp = await axios.get('/login')
        setFlags(temp);
    }
    return(
  <div className="form bounceIn">
  <div className="title">SD Chat App</div>
  <div className="subtitle">Let's login your account</div>
  <form className='forminput'>
    <div className="input-container ic1">
        <input id="email" className="input" type="text" placeholder=" " />
        <div className="cut"></div>
         <div className="nameeffect">SD Name</div>
  </div>
  <div className="input-container ic2">
     <input id="firstname" onChange={(e)=>{codesend(e)}}className="input" type="text" placeholder=" " />
     <div className="cut cut-short"></div>
     <div className="nameeffect">Code</div>
  </div>
      <button type="submit" className="submit">Submit</button>
   </form>
</div>
    )
}
