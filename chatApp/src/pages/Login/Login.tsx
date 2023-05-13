import { useState } from "react"
import "./Login.scss"

type auth = {
    authorized: boolean
}


export function Login() {
    var flag: boolean = false;
    const [code, setCode] = useState('')
    const [name,setName] = useState('')

    async function testing(e:any) {
        e.preventDefault()

        request("http://192.168.1.37:3000/api/v1/auth")
        console.log(flag)
        setTimeout(() => {
            if (flag == true) {
                localStorage.setItem("name",name)
                window.location.replace("http://192.168.1.37:5173/home")
            } else {
                var errorCode = document.querySelector(".nameeffect")
                errorCode?.classList.add("red")
            }
    
        },80)

    }

    function request(url: string) {
        console.log(code);
        
         fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "Application/json",
            },
            body: JSON.stringify({code})
        })
        .then( res => res.json() )
        .then( res => flag = (res as auth).authorized )
    }

    return (
        <div className="heade">
            <div className="form bounceIn">
                <div className="title">SD Chat App</div>
                <div className="subtitle">Let's login your account</div>
                <form className="forminput">
                    <div className="input-container ic1">
                        <input id="email" className="input" type="text" placeholder=" " onChange={(e) => {setName(e.target.value)}}/>
                        <div className="cut"></div>
                        <div className="nameeffect">SD Name</div>
                    </div>
                    <div className="input-container ic2">
                        <input
                            id="firstname"
                            onChange={e => {
                                {setCode(e.target.value)}
                            }}
                            className="input"
                            type="text"
                            placeholder=" "
                        />
                        <div className="cut cut-short"></div>
                        <div className="nameeffect">Code</div>
                    </div>
                
                    <button type="submit" className="submit" onClick={(e) => {testing(e)}}>
                        Submit
                    </button>
                </form>
            </div>
            
        </div>
    )
}
