import "./UserBar.scss"
import { GrGroup } from "react-icons/gr"

export default function UserBar() {
    return (
       <div>

            <div
                style={{
                    height: "100vh",
                }}
            >
                <div
                    className="card chat-group"
                    style={{
                        margin: "10px"
                    }}
                >
                    <div>
                        <GrGroup
                            style={{
                                height: "20px",
                                width: "20px"
                            }}
                        >
                        </GrGroup>
                            <h4>SD Workspace</h4>
                        
                    </div>
                    <p>Click here!</p>
                </div>
                <div
                    className="card"
                    style={{
                        margin: "10px"
                    }}
                >
                    <GrGroup
                        style={{
                            height: "20px",
                            width: "20px"
                        }}
                    ></GrGroup>
                    <div>
                        <h4>SD Document</h4>
                        <p>Click here!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
