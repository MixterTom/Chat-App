import { MdInsertEmoticon, MdOutlineAttachFile } from "react-icons/md"
import { AiOutlineSend } from "react-icons/ai"
import { useState } from "react"
import "./Typing.scss"
import { io } from "socket.io-client"



const socket = io("http://192.168.1.37:3000").connect()

export default function Typing() {
    const [message, setInput] = useState("")
    
    //For user when they press Enter
    function enterToSend(e: any) {
        if (e.keycode == 13) {
            fetchApi(e)
        }
    }

    //For icon-box
    function addIcon(value: string) {
        let a = value
        setInput(prev => prev + a)
    }

    //for show/hide box
    function showIconBox() {
        const iconBox = document.querySelector(".box-icon")
        if (iconBox?.classList.contains("hiding")) {
            iconBox.classList.remove("hiding")
        } else {
            iconBox?.classList.add("hiding")
        }
    }

    //Send message


    var userName = localStorage.getItem('name');
    async function fetchApi(e: any) {
        e.preventDefault()

        var date = Date.now()
        var sender: string = userName || ''

        socket.emit("send-messages", { sender, message, date })
        console.log("thành cong")

        setInput("")

        /*
        try {
            await axios
                .post("http://localhost:3000/api/v1/create", {
                    sender,
                    message,
                    date
                })
                .then(() => {
                    console.log(message)
                })
                .then(() => {
                    setInput("")
                })
        } catch (error) {
            console.log(error)
        }
        */
    }

    return (
        <form action="/">
            <div className="row no-gutters stick-bottom divide">
                <div className="col-1 tool">
                    <div>
                        <MdOutlineAttachFile
                            style={{
                                fontSize: "2rem",
                                margin: "3px",
                                cursor: "pointer"
                            }}
                            className="file-icon"
                        ></MdOutlineAttachFile>
                    </div>

                    <div>
                        <div
                            className="box-icon hiding"
                            style={{
                                position: "absolute",
                                bottom: "90%",
                                left: "8%",
                                fontSize: "1.4rem",
                                zIndex: 3
                            }}
                        >
                            <div
                                style={{
                                    height: "100%",
                                    width: "100%",
                                    backgroundColor: "white",
                                    borderRadius: "5px"
                                }}
                            >
                                <div className="row" style={{ paddingTop: "10px" }}>
                                    <p
                                        className="col-auto blur-button"
                                        onClick={() => addIcon("😊")}
                                        style={{ cursor: "pointer", marginLeft: "10px" }}
                                    >
                                        😊
                                    </p>
                                    <p
                                        className="col-auto blur-button"
                                        onClick={() => addIcon("😢")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        😢
                                    </p>
                                    <p
                                        className="col-auto blur-button"
                                        onClick={() => addIcon("😍")}
                                        style={{ cursor: "pointer", marginRight: "10px" }}
                                    >
                                        😍
                                    </p>
                                </div>

                                <div className="row">
                                    <p
                                        className="col-auto blur-button"
                                        onClick={() => addIcon("😭")}
                                        style={{ cursor: "pointer", marginLeft: "10px" }}
                                    >
                                        😭
                                    </p>
                                    <p
                                        className="col-auto blur-button"
                                        onClick={() => addIcon("😎")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        😎
                                    </p>
                                    <p
                                        className="col-auto blur-button"
                                        onClick={() => addIcon("💕")}
                                        style={{ cursor: "pointer", marginRight: "10px" }}
                                    >
                                        💕
                                    </p>
                                </div>

                                <div className="row">
                                    <p
                                        className="col-auto blur-button"
                                        onClick={() => addIcon("👌")}
                                        style={{ cursor: "pointer", marginLeft: "10px" }}
                                    >
                                        👌
                                    </p>
                                    <p
                                        className="col-auto blur-button"
                                        onClick={() => addIcon("👍")}
                                        style={{ cursor: "pointer" }}
                                    >
                                        👍
                                    </p>
                                    <p
                                        className="col-auto blur-button"
                                        onClick={() => addIcon("👎")}
                                        style={{ cursor: "pointer", marginRight: "10px" }}
                                    >
                                        👎
                                    </p>
                                </div>
                            </div>
                        </div>
                        <MdInsertEmoticon
                            style={{
                                fontSize: "2rem",
                                margin: "3px",
                                cursor: "pointer",
                                positive: "relative"
                            }}
                            className="file-icon"
                            onClick={showIconBox}
                        ></MdInsertEmoticon>
                    </div>
                </div>
                <div className="col-9">
                    <div className="input-group mb-2">
                        <input
                            type="text"
                            className="form-control"
                            id="inlineFormInputGroup"
                            placeholder="Enter your message..."
                            value={message}
                            onChange={e => {
                                setInput(e.target.value)
                            }}
                            style={{
                                borderRadius: "5px",
                                width: "90%"
                            }}
                            onKeyDown={e => {
                                enterToSend(e)
                            }}
                        />
                    </div>
                </div>

                <div className="col-1">
                    <div
                        onClick={e => {
                            fetchApi(e)
                        }}
                    >
                        <button
                            type="submit"
                            style={{
                                padding: "4px 10px",
                                borderRadius: "15px",
                                display: "flex",
                                justifyContent: "center",
                                width: "65%"
                            }}
                        >
                            <AiOutlineSend
                                style={{
                                    height: "1.7rem"
                                }}
                            ></AiOutlineSend>
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
