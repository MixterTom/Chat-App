import { HiOutlineUserCircle } from "react-icons/hi"


interface Info {
    name: string,
    message?: string,
}

export default function Receive(props: Info) {
    return (
        <>
            <div
                className="col-12 receive-box"
                style={{
                    display: "flex",
                    justifyContent: "flex-start",
                    position: "relative"
                }}
            >
                <HiOutlineUserCircle
                    style={{
                        fontSize: "1.6rem"
                    }}
                ></HiOutlineUserCircle>
                <div>
                    <p
                        style={{
                            paddingLeft: "3px",
                            margin: 0
                        }}
                    >{props.name}</p>
                    <p
                        style={{
                            background: "#e4e6eb",
                            borderRadius: "5px",
                            padding: "10px",
                            position: "relative"
                        }}
                    >
                        {props.message}
                    </p>
                </div>
            </div>
        </>
    )
}
