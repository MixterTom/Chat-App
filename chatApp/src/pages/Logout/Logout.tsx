import './Logout.scss'

export default function Logout() {
    return (
        <div
            style={{
                height: "100vh",
                width: "100vw",
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
        >
            <form
                action="/login"
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexWrap: "wrap"
                }}
            >
                <h1
                    style={{
                        width: "100%",
                        paddingLeft: "40px",
                        paddingBottom: "40px"
                    }}
                >
                    Đăng Nhập Lại ?
                </h1>
                <button
                    style={{
                        border: "none",
                        padding: "10px 30px",
                        borderRadius: "10px"
                    }}
                    className="button"
                >
                    Log In
                </button>
            </form>
        </div>
    )
}
