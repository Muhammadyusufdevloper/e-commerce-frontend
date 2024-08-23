import { memo, useState, useEffect } from "react";
import "./product-manage.scss";
import { useGetProductsQuery } from "../../../../context/api/productApi";
import DeleteModal from "../../components/delete-modal/delete-modal";

const ProductManage = () => {
    const { data: product, isLoading, isFetching } = useGetProductsQuery({ limit: 10, skep: 1 });
    const [deleteModal, setDeleteModal] = useState(null);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        if (product?.payload) {
            setProductList(product.payload);
        }
    }, [product]);

    if (isLoading || isFetching) {
        return <div className="product-manage__loading"><span className="loader"></span></div>;
    }

    return (
        <div className="product-manage">
            <h1 className="product-manage__title">Product Manage</h1>
            <table className="product-manage__table">
                <thead className="product-manage__thead">
                    <tr>
                        <th>Image</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>Admin</th>
                        <th>Rating</th>
                        <th>Price</th>
                        <th>Old Price</th>
                        <th>Stock</th>
                        <th>Edit</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className="product-manage__tbody">
                    {productList.map((product) => (
                        <tr key={product._id} className="product-manage__row">
                            <td className="product-manage__cell">
                                <img
                                    src={product.urls[0]}
                                    alt={product.title}
                                    className="product-manage__image"
                                />
                            </td>
                            <td className="product-manage__cell"><p className="product-manage__name-text">{product.title}</p></td>
                            <td className="product-manage__cell">
                                {product.categoryId.title[0].toUpperCase() + product.categoryId.title.slice(1).toLowerCase()}
                            </td>
                            <td className="product-manage__cell">{product.adminId?.fname + " " + product.adminId?.username}</td>
                            <td className="product-manage__cell">{product.rating}</td>
                            <td className="product-manage__cell"><p className="product-manage__price">${product.price}</p></td>
                            <td className="product-manage__cell"><p className="product-manage__price-text">{product.oldPrice ? `$${product.oldPrice}` : "N/A"}</p></td>
                            <td className="product-manage__cell">{product.stock}</td>
                            <td className="product-manage__cell">
                                <button
                                    className="product-manage__button product-manage__button--edit"
                                >
                                    Edit
                                </button>
                            </td>
                            <td className="product-manage__cell">
                                <button
                                    onClick={() => setDeleteModal(product._id)}
                                    className="product-manage__button product-manage__button--delete"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {
                deleteModal &&
                <DeleteModal title={"Product delete"} desc={"Are you sure you want to delete this product?"} modalDelete={deleteModal} setModalDelete={setDeleteModal} isDelete={true} />
            }
        </div>
    );
};

export default memo(ProductManage);
