import PropTypes from 'prop-types';

const Loading = ({ width, height, borderRadius }) => {
    return (
        <>
            <div style={{ width, height, backgroundColor: "#F0EEED", borderRadius }}>
            </div>
        </>
    );
}

Loading.propTypes = {
    width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

Loading.defaultProps = {
    borderRadius: "0px",
};

export default Loading;
