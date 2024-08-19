import { memo, useState } from "react";
import PropTypes from "prop-types";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { MdOutlineStarPurple500 } from "react-icons/md";
import item from "../../../../../../assets/images/single-rout/item.svg";
import "./faqs.scss";

const Faqs = ({ comments }) => {
    const [limit, setLimit] = useState(9);

    return (
        <>
            <div className="faqs">
                <div className="faqs__wrapper">
                    <div className="faqs__cards">
                        {comments.slice(3, limit).map((comment) => {
                            return (
                                <div className="faqs__card" key={comment?.id}>
                                    <div className="faqs__card-top">
                                        <div className="faqs__card-stars">
                                            {Array.from({ length: 5 }, (_, index) => (
                                                <MdOutlineStarPurple500 key={index} />
                                            ))}
                                        </div>
                                        <img src={item} alt="item img" />
                                    </div>
                                    <div className="faqs__card-context">
                                        <h3 className="faqs__title">
                                            {comment?.firstName + " " + comment?.lastName}
                                        </h3>
                                        <IoIosCheckmarkCircle />
                                    </div>
                                    <p className="faqs__text">{comment?.description}</p>
                                    <p className="faqs__date">Posted on August 14, 2023</p>
                                </div>
                            );
                        })}
                    </div>
                    <div className="faqs__button-wrapper">
                        <button onClick={() => setLimit(limit + 2)} className="faqs__button">
                            Load More Reviews
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

Faqs.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
            firstName: PropTypes.string.isRequired,
            lastName: PropTypes.string.isRequired,
            description: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default memo(Faqs);