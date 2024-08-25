import { TfiMenuAlt } from "react-icons/tfi";
import { useGetCategoriesQuery } from "../../../../context/api/categoryApi";
import { Slider } from "antd";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { IoCheckmark, IoClose } from "react-icons/io5";
import "./shop-sidebar.scss";
import { useState } from "react";

const ShopSidebar = ({ setSideBarMenu, sideBarMenu }) => {
    const { data: category } = useGetCategoriesQuery();
    console.log(category);

    const colors = [
        "#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#FF00FF", "#00FFFF",
        "#800000", "#808000", "#008080", "#800080", "#008000", "#000080",
        "#FFA500", "#A52A2A", "#D2691E", "#FF4500", "#2E8B57", "#4682B4",
        "#6A5ACD", "#7FFF00", "#DDA0DD", "#EE82EE", "#F08080", "#5F9EA0"
    ];

    const sizes = [
        "XX-Small", "X-Small", "Small", "Medium", "Large",
        "X-Large", "XX-Large", "XXX-Large"
    ];

    const [selectedColor, setSelectedColor] = useState("");
    const [selectedSize, setSelectedSize] = useState("");

    const handleColorClick = (color) => {
        setSelectedColor(color);
    };

    const handleSizeClick = (size) => {
        setSelectedSize(size);
    };

    return (
        <>
            <div onClick={() => setSideBarMenu(false)} className={`shop-sidebar__overlay ${sideBarMenu ? "shop-sidebar__overlay--active" : ""}`}></div>
            <div className={`shop-sidebar ${sideBarMenu ? "shop-sidebar--active" : ""}`}>
                <div className={`shop-sidebar__wrapper ${sideBarMenu ? "shop-sidebar__wrapper--active" : ""}`}>
                    <div className="shop-sidebar__top-header">
                        <h3 className="shop-sidebar__title">Filters</h3>
                        <button className="shop-sidebar__menu-btn"><TfiMenuAlt /></button>
                        <button onClick={() => setSideBarMenu(false)} className={`shop-sidebar__close-btn ${sideBarMenu ? "shop-sidebar__menu-btn--active" : ""}`}><IoClose /></button>
                    </div>
                    <ul className="shop-sidebar__list">
                        {
                            category?.payload?.map(item => (
                                <li className="shop-sidebar__item" key={item._id}>
                                    <data onClick={() => setSideBarMenu(false)} className="shop-sidebar__link" value={item._id}>
                                        {item?.title.slice(0, 1).toUpperCase() + item?.title.slice(1).toLowerCase()}
                                    </data>
                                </li>
                            ))
                        }
                    </ul>
                    <details className="shop-sidebar__slider">
                        <summary className="shop-sidebar__summary">
                            <h3>Price</h3>
                            <span ><MdOutlineKeyboardArrowDown /></span>
                        </summary>
                        <Slider range defaultValue={[20, 50]} />
                    </details>
                    <details className="shop-sidebar__color">
                        <summary className="shop-sidebar__summary">
                            <h3>Colors</h3>
                            <span ><MdOutlineKeyboardArrowDown /></span>
                        </summary>
                        <div className="shop-sidebar__colors">
                            {colors.map((color, index) => (
                                <button
                                    key={index}
                                    className="shop-sidebar__color-btn"
                                    style={{ backgroundColor: color }}
                                    onClick={() => handleColorClick(color)}
                                >
                                    {selectedColor === color && <IoCheckmark />}
                                </button>
                            ))}
                        </div>
                    </details>
                    <details className="shop-sidebar__size">
                        <summary className="shop-sidebar__summary">
                            <h3>Size</h3>
                            <span ><MdOutlineKeyboardArrowDown /></span>
                        </summary>
                        <div className="shop-sidebar__sizes">
                            {sizes.map((size, index) => (
                                <button
                                    key={index}
                                    className="shop-sidebar__size-btn"
                                    onClick={() => handleSizeClick(size)}
                                    style={{
                                        backgroundColor: selectedSize === size ? "black" : "#f0f0f0",
                                        color: selectedSize === size ? "white" : "black",
                                    }}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </details>
                </div>
            </div>
        </>
    );
}

export default ShopSidebar;
