import "./product-edit-modal.scss";
import { CgClose } from "react-icons/cg";
import { memo, useEffect, useState } from "react";
import { useUpdateProductMutation } from "../../../../context/api/productApi";
import { useGetCategoriesQuery } from "../../../../context/api/categoryApi";

const ProductEditModal = ({ setModalEdit, modalEdit, title }) => {
    const [editProduct, { isSuccess: productSuccess }] = useUpdateProductMutation();
    const { data: categories } = useGetCategoriesQuery();
    const [editInput, setEditInput] = useState(modalEdit);

    useEffect(() => {
        if (productSuccess) {
            setModalEdit(null);
        }
    }, [productSuccess]);
    const handleEdit = (e) => {
        e.preventDefault();
        const { title, stock, price, oldPrice, categoryId, adminId, units, desc, urls } = editInput;
        editProduct({
            body: {
                title,
                stock,
                price,
                oldPrice,
                adminId: String(adminId),
                units,
                desc,
                urls,
                categoryId: String(categoryId),
            },
            id: editInput._id
        });
    };

    return (
        <div className="product-edit-modal">
            <div onClick={() => setModalEdit(null)} className="product-edit-modal__overlay"></div>
            <div className="product-edit-modal__wrapper">
                <div className="product-edit-modal__top">
                    <h3 className="">{title}</h3>
                    <button onClick={() => setModalEdit(null)} className="product-edit-modal__close-btn"><CgClose /></button>
                </div>
                <form className="product-edit-modal__form" onSubmit={handleEdit}>
                    <div className="product-edit-modal__card-wrapper">
                        <label className="product-edit-modal__label" htmlFor="product-title">Product Name</label>
                        <input
                            value={editInput.title}
                            onChange={(e) => setEditInput(prev => ({ ...prev, title: e.target.value }))}
                            className="product-edit-modal__input"
                            id="product-title"
                            type="text"
                            placeholder="Product Name"
                            required
                        />
                    </div>
                    <div className="product-edit-modal__card-wrapper">
                        <label className="product-edit-modal__label" htmlFor="product-category">Category</label>
                        <select
                            value={editInput.categoryId}
                            onChange={(e) => setEditInput(prev => ({ ...prev, categoryId: e.target.value }))}
                            className="product-edit-modal__select"
                            id="product-category"
                            required
                        >
                            <option disabled hidden>Select Category</option>
                            {categories?.payload?.map(category => (
                                <option key={category._id} value={String(category._id)}>
                                    {category.title.charAt(0).toUpperCase() + category.title.slice(1).toLowerCase()}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className="product-edit-modal__card-wrapper">
                        <label className="product-edit-modal__label" htmlFor="product-old-price">Old Price</label>
                        <input
                            value={editInput.oldPrice}
                            onChange={(e) => setEditInput(prev => ({ ...prev, oldPrice: e.target.value }))}
                            className="product-edit-modal__input"
                            id="product-old-price"
                            type="number"
                            placeholder="Old Price"
                        />
                    </div>
                    <div className="product-edit-modal__card-wrapper">
                        <label className="product-edit-modal__label" htmlFor="product-price">Price</label>
                        <input
                            value={editInput.price}
                            onChange={(e) => setEditInput(prev => ({ ...prev, price: e.target.value }))}
                            className="product-edit-modal__input"
                            id="product-price"
                            type="number"
                            placeholder="Price"
                            required
                        />
                    </div>
                    <div className="product-edit-modal__card-wrapper">
                        <label className="product-edit-modal__label" htmlFor="product-stock">Stock</label>
                        <input
                            value={editInput.stock}
                            onChange={(e) => setEditInput(prev => ({ ...prev, stock: e.target.value }))}
                            className="product-edit-modal__input"
                            id="product-stock"
                            type="number"
                            placeholder="Stock"
                            required
                        />
                    </div>
                    <div className="product-edit-modal__bottom">
                        <button type="button" onClick={() => setModalEdit(null)} className="product-edit-modal__button">Close</button>
                        <button type="submit" className="product-edit-modal__button">Edit</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default memo(ProductEditModal);
