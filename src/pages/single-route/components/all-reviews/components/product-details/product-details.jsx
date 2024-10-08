import { memo, useState } from "react";
import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import item from "../../../../../../assets/images/single-rout/item.svg";
import "./product-details.scss";

const ProductDetails = ({ comments }) => {
    const [limit, setLimit] = useState(12);
    return (
        <>
            <div className="product-details">
                <div className="product-details__wrapper">
                    <div className="product-details__cards">
                        {comments.slice(6, limit).map((comment) => {
                            return (
                                <div className="product-details__card" key={comment?.id}>
                                    <div className="product-details__card-top">
                                        <div className="product-details__card-stars">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <MdOutlineStarPurple500 key={index} />
                                            ))}
                                        </div>
                                        <img src={item} alt="item img" />
                                    </div>
                                    <div className="product-details__card-context">
                                        <h3 className="product-details__title">
                                            {comment?.firstName + " " + comment?.lastName}
                                        </h3>
                                        <IoIosCheckmarkCircle />
                                    </div>
                                    <p className="product-details__text">{comment?.description}</p>
                                    <p className="product-details__date">Posted on August 14, 2023</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="product-details__button-wrapper">
                        <button onClick={() => setLimit(limit + 2)} className="product-details__button">
                            Load More Reviews
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

ProductDetails.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default memo(ProductDetails);