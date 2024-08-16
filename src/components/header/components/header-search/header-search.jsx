import { memo, useState } from "react";
import PropTypes from "prop-types";
import { CgCloseO } from "react-icons/cg";
import { IoSearch } from "react-icons/io5";
import "./header-search.scss";
import { FaArrowCircleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

const HeaderSearch = ({ showSearch, setShowSearch }) => {
    const [searchValue, setSearchValue] = useState("");

    return (
        <div className={`header-search ${showSearch && "header-search--active"}`}>
            <Link
                to="/"
                onClick={() => {
                    setSearchValue("")
                    setShowSearch(false)
                }}
                className="header-search__home-btn"
            >
                <FaArrowCircleLeft /> <p>Back to Home</p>
            </Link>
            <div className="header-search__wrapper">
                <label htmlFor="search" className="header-search__search-btn">
                    <IoSearch />
                </label>
                <input
                    type="text"
                    id="search"
                    placeholder="Search for products..."
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    className="header-search__input"
                />
                <button
                    onClick={() => setSearchValue("")}
                    disabled={!searchValue}
                    className={`header-search__close-btn ${!searchValue && "header-search__close-btn--disabled"
                        }`}
                >
                    <CgCloseO />
                </button>
            </div>
        </div>
    );
};

HeaderSearch.propTypes = {
    showSearch: PropTypes.bool.isRequired,
    setShowSearch: PropTypes.func.isRequired,
};

export default memo(HeaderSearch);
