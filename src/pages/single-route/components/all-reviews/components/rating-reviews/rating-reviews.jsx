import { memo, useState } from "react";
import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import item from "../../../../../../assets/images/single-rout/item.svg";
import "./rating-reviews.scss";

const RatingReviews = ({ comments }) => {
    const [limit, setLimit] = useState(6);

    return (
        <>
            <div className="rating-reviews">
                <div className="rating-reviews__wrapper">
                    <div className="rating-reviews__cards">
                        {comments.slice(0, limit).map((comment) => {
                            return (
                                <div className="rating-reviews__card" key={comment?.id}>
                                    <div className="rating-reviews__card-top">
                                        <div className="rating-reviews__card-stars">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <MdOutlineStarPurple500 key={index} />
                                            ))}
                                        </div>
                                        <img src={item} alt="item img" />
                                    </div>
                                    <div className="rating-reviews__card-context">
                                        <h3 className="rating-reviews__title">
                                            {comment?.firstName + " " + comment?.lastName}
                                        </h3>
                                        <IoIosCheckmarkCircle />
                                    </div>
                                    <p className="rating-reviews__text">{comment?.description}</p>
                                    <p className="rating-reviews__date">Posted on August 14, 2023</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="rating-reviews__button-wrapper">
                        <button onClick={() => setLimit(limit + 2)} className="rating-reviews__button">
                            Load More Reviews
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

RatingReviews.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default memo(RatingReviews);
