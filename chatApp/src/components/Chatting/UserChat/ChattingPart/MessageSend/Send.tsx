

interface Message {
    message:string,
}

export default function Send(props: Message) {
    return (
        <div>
            <div
                className="col-12"
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}
            >
                <p
                    style={{
                        borderRadius: "5px",
                        padding: "10px",
                        marginRight: "7px",
                        backgroundColor: "#0084ff",
                        color: "#ffff"
                    }}
                >
                    {props.message}
                </p>
            </div>
            
        </div>
    )
}
