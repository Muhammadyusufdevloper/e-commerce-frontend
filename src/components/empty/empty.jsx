import PropTypes from "prop-types";
import { Link, useNavigate } from "react-router-dom";
import "./empty.scss";
import { memo } from "react";
const Empty = ({ image }) => {
    let navigate = useNavigate();
    return (
        <>
            <div className="empty">
                <div className="empty__wrapper">
                    <div className="empty__image">
                        <img src={image} alt="empty img" />
                    </div>
                    <div className="empty__link-wrapper">
                        <Link to={"/"} className="empty__link">Return home</Link>
                        <button onClick={() => navigate(-1)} className="empty__link">Go back</button>
                    </div>
                </div>
            </div>
        </>
    );
}

Empty.propTypes = {
    image: PropTypes.string.isRequired,
};

export default memo(Empty);
