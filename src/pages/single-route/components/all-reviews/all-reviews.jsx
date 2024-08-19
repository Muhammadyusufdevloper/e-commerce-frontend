import { memo, useState } from "react";
import "./all-reviews.scss";
import menuImg from "../../../../assets/images/single-rout/menu.svg";
import RatingReviews from "./components/rating-reviews/rating-reviews";
import ProductDetails from "./components/product-details/product-details";
import Faqs from "./components/faqs/faqs";
import { comments } from "../../../../assets/data/data";

const AllReviews = () => {
    const [activeTab, setActiveTab] = useState("Product Details");

    const renderComponent = () => {
        switch (activeTab) {
            case "Product Details":
                return <ProductDetails comments={comments} />;
            case "Rating & Reviews":
                return <RatingReviews comments={comments} />;
            case "FAQs":
                return <Faqs comments={comments} />;
            default:
                return <ProductDetails comments={comments} />;
        }
    };

    return (
        <section className="all-reviews">
            <div className="container">
                <div className="all-reviews__wrapper">
                    <div className="all-reviews__top-wrapper">
                        <ul className="all-reviews__header-list">
                            <li
                                className={`all-reviews__header-item ${activeTab === "Product Details" ? "all-reviews__header-item--active" : ""}`}
                                onClick={() => setActiveTab("Product Details")}
                            >
                                <h3 className="all-reviews__header-title">Product Details</h3>
                            </li>
                            <li
                                className={`all-reviews__header-item ${activeTab === "Rating & Reviews" ? "all-reviews__header-item--active" : ""}`}
                                onClick={() => setActiveTab("Rating & Reviews")}
                            >
                                <h3 className="all-reviews__header-title">Rating & Reviews</h3>
                            </li>
                            <li
                                className={`all-reviews__header-item ${activeTab === "FAQs" ? "all-reviews__header-item--active" : ""}`}
                                onClick={() => setActiveTab("FAQs")}
                            >
                                <h3 className="all-reviews__header-title">FAQs</h3>
                            </li>
                        </ul>
                        <div className="all-reviews__sap-info-box">
                            <h2 className="all-reviews__title">All Reviews <span>({comments.length})</span></h2>
                            <div className="all-reviews__buttons">
                                <button className="all-reviews__menu-btn">
                                    <img src={menuImg} alt="menu img" />
                                </button>
                                <label htmlFor="select-latest" className="all-reviews__select-wrapper">
                                    <select id="select-latest" className="all-reviews__select">
                                        <option value="latest">Latest</option>
                                        <option value="latest">Oldest</option>
                                        <option value="rating">Highest Rating</option>
                                        <option value="rating">Lowest Rating</option>
                                    </select>
                                </label>
                                <button className="all-reviews__write-btn">Write a Review</button>
                            </div>
                        </div>
                    </div>
                    <div className="all-reviews__content-wrapper">
                        {renderComponent()}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default memo(AllReviews);
