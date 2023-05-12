import "./Chatting.scss"
import Typing from "./UserChat/Typing/Typing"
import HeaderTool from "./UserChat/HeaderTool/HeaderTool"
import Receive from "./UserChat/ChattingPart/MessageReceive/Receive"
import Send from "./UserChat/ChattingPart/MessageSend/Send"
import UserBar from "./UserBar/UserBar"
import { useEffect, useState } from "react"
import axios, { AxiosResponse } from "axios"
import { io } from "socket.io-client"

const socket = io('http://localhost:3000').connect()

export default function Chatting() {
    function avoidBubble() {
        const iconBox = document.querySelector(".box-icon")
        if (iconBox?.classList.contains("hiding")) {
        } else {
            iconBox?.classList.add("hiding")
        }
    }

    //History Chatting

    const [history, setHistory] = useState<AxiosResponse>()
    useEffect(() => {
        const fetchData = async () => {
            const data = await axios.get("http://localhost:3000/api/v1/read")
            setHistory(data)
        }
        fetchData()
    },[])


    //Realtime
    const [newMess, setNewMess] = useState()
    useEffect(() => {
        socket.on("messages-recieve", (data) => {
            setNewMess(data)
            console.log(data);
        })
    },[socket])


    // JSX
    return (
        <div
            style={{
                overflow: "hidden"
            }}
        >
            <div className="row">
                {/* User Bar */}
                <div className="col-3 user-bars" onClick={avoidBubble}>
                    <UserBar></UserBar>
                </div>

                {/* User Chat */}
                <div className="col-9 user-chat">
                    <div className="row" onClick={avoidBubble}>
                        <HeaderTool></HeaderTool>
                    </div>

                    <div className="row" onClick={avoidBubble}>
                        <div
                            style={{
                                height: "10px",
                                backgroundColor: "#ffffff"
                            }}
                        ></div>
                        <div
                            style={{
                                height: "650px",
                                maxHeight: "650px",
                                overflowY: "auto",
                                backgroundColor: "#ffffff"
                            }}
                        >
                            {history &&
                                history.data.map((mess: any) => {
                                    if(mess.sender == "Thanh Bình") {
                                        return(
                                            <Send message={mess.message}></Send>
                                        )
                                    }
                                    return(
                                        
                                    <Receive name={mess.sender} message={mess.message}></Receive>
                                    )
                                })}

                                <Receive name="undefined" message={newMess}></Receive>
                        </div>
                    </div>

                    <div className="row">
                        <Typing />
                    </div>
                </div>
            </div>
        </div>
    )
}
