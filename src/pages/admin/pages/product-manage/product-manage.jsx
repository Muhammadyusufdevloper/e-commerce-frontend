import { memo, useState, useEffect } from "react";
import "./product-manage.scss";
import { useGetProductsQuery } from "../../../../context/api/productApi";
import DeleteModal from "../../components/delete-modal/delete-modal";
import { useGetCategoriesQuery } from "../../../../context/api/categoryApi";
import ProductEditModal from "../../components/product-edit-modal/product-edit-modal";

const ProductManage = () => {
    const [categoryList, setCategoryList] = useState("");
    const [editCategory, setEditCategory] = useState(null)
    const { data: product, isLoading, isFetching } = useGetProductsQuery({ limit: 10, skep: 1 });
    const [deleteModal, setDeleteModal] = useState(null);
    const [productList, setProductList] = useState([]);
    const [sortOption, setSortOption] = useState({ field: "", order: "asc" });
    const { data } = useGetCategoriesQuery()

    useEffect(() => {
        if (product?.payload) {
            setProductList(product?.payload);
        }
    }, [product]);

    useEffect(() => {
        let sortedList = [...productList];
        if (sortOption.field) {
            sortedList.sort((a, b) => {
                if (sortOption.order === "asc") {
                    return a[sortOption.field] > b[sortOption.field] ? 1 : -1;
                } else {
                    return a[sortOption.field] < b[sortOption.field] ? 1 : -1;
                }
            });
        }
        setProductList(sortedList);
    }, [sortOption]);

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
                        <th>
                            <select
                                className="product-manage__select"
                            >
                                <option disabled hidden >Category</option>
                                <option value="">All</option>
                                {data?.payload?.map((item) => (
                                    <option key={item._id} value={item._id}>{item.title.slice(0, 1).toUpperCase() + item.title.slice(1).toLowerCase()}</option>
                                ))}
                            </select>
                        </th>
                        <th>
                            <select
                                onChange={(e) => setSortOption({ field: "rating", order: e.target.value })}
                                className="product-manage__select"
                            >
                                <option value="asc">Rating (Low to High)</option>
                                <option value="desc">Rating (High to Low)</option>
                            </select>
                        </th>
                        <th>Admin</th>
                        <th>
                            <select
                                onChange={(e) => setSortOption({ field: "price", order: e.target.value })}
                                className="product-manage__select"
                            >
                                <option value="asc">Price (Low to High)</option>
                                <option value="desc">Price (High to Low)</option>
                            </select>
                        </th>
                        <th>
                            <select
                                onChange={(e) => setSortOption({ field: "oldPrice", order: e.target.value })}
                                className="product-manage__select"
                            >
                                <option value="asc">Old Price (Low to High)</option>
                                <option value="desc">Old Price (High to Low)</option>
                            </select>
                        </th>
                        <th>
                            <select
                                onChange={(e) => setSortOption({ field: "stock", order: e.target.value })}
                                className="product-manage__select"
                            >
                                <option value="asc">Stock (Low to High)</option>
                                <option value="desc">Stock (High to Low)</option>
                            </select>
                        </th>
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
                            <td className="product-manage__cell">{product.rating}</td>
                            <td className="product-manage__cell">{product.adminId?.fname + " " + product.adminId?.username}</td>
                            <td className="product-manage__cell"><p className="product-manage__price">${product.price}</p></td>
                            <td className="product-manage__cell"><p className="product-manage__price-text">{product.oldPrice ? `$${product.oldPrice}` : "N/A"}</p></td>
                            <td className="product-manage__cell">{product.stock}</td>
                            <td className="product-manage__cell">
                                <button
                                    onClick={() => setEditCategory(product)}
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
            {
                editCategory && <ProductEditModal modalEdit={editCategory} setModalEdit={setEditCategory} isEdit={false} title={"Edit Product"} />
            }
        </div>
    );
};

export default memo(ProductManage);
