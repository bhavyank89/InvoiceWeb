export default function Alert({ alertMessage }) {
    const alertStyle = {
        position: "fixed",
        top: "30px",
        right: "30px",
        backgroundColor: "#a0f0a0",
        padding: "10px 20px",
        borderRadius: "5px",
        boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
        zIndex: 9999,
    };
    return (
        <div style={alertStyle} role="alert">
            <div className="flex">
                <div>
                    <p className="font -bold">{alertMessage}</p>
                </div>
            </div>
        </div>
    )
}