import { FiPhoneCall } from "react-icons/fi"
import { GrPower } from "react-icons/gr"
import "./HeaderTool.scss"

export default function HeaderTool() {
    return (
        <div className="tool-bar">
            <div className="blur-pointer-power">
                <form action="/logout">
                    <button className="btn" style={{fontSize: "1.3rem",display: "flex", marginTop: "2px"}}>
                        <GrPower></GrPower>
                    </button>
                </form>
            </div>

            <h3>SD Workspace</h3>

            <div
                style={{
                    paddingRight: "10px"
                }}
                className="blur-pointer"
            >
                <FiPhoneCall></FiPhoneCall>
            </div>
        </div>
    )
}
