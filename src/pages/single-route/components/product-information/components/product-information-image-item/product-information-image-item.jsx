import { memo } from "react";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css';
import "./product-information-image-item.scss";

const ProductInformationImageItem = () => {
    return (
        <div className="product-information-image-item">
            <div className="product-information-image-item__small-image">
                <div className="product-information-image-item__small-image-item">
                    <img src="small-image-1.jpg" alt="Small Image 1" />
                </div>
                <div className="product-information-image-item__small-image-item">
                    <img src="small-image-2.jpg" alt="Small Image 2" />
                </div>
                <div className="product-information-image-item__small-image-item">
                    <img src="small-image-3.jpg" alt="Small Image 3" />
                </div>
            </div>
            <div className="product-information-image-item__big-image">
                <Zoom>
                    <img src="" alt="Big Image" />
                </Zoom>
            </div>
        </div>
    );
};

export default memo(ProductInformationImageItem);
