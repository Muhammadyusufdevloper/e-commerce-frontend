import "./toast.scss";

const Toast = ({ image, title, message, type }) => {
    return (
        <div className={`toast ${type}`} id="toast">
            <div className="toast-content">
                {image && <img src={image} alt={title} className="toast-image" />}
                <div className="toast-text">
                    {title && <p className="toast-title">{title}</p>}
                    {message && <p className="toast-description">{message}</p>}
                </div>
                <button className="toast-close" onClick={() => closeToast()}>&times;</button>
            </div>
        </div>
    );
}

export default Toast;
