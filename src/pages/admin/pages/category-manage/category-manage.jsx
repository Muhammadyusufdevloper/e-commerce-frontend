import { MdOutlineDeleteOutline } from "react-icons/md";
import { useGetCategoriesQuery } from "../../../../context/api/categoryApi"
import "./category-manage.scss"
import { CiEdit } from "react-icons/ci";
import { useState } from "react";
import DeleteModal from "../../components/delete-modal/delete-modal";
import EditModal from "../../components/edit-modal/edit-modal";
const CategoryManage = () => {
    const { data: category, isLoading, isFetching } = useGetCategoriesQuery()
    const [editCategory, setEditCategory] = useState(null)
    const [deleteCategory, setDeleteCategory] = useState(null)
    if (isLoading || isFetching) {
        return <div className="product-manage__loading"><span className="loader"></span></div>;
    }
    return (
        <>
            <div className="category-manage">
                <dir className="category-manage__wrapper">
                    <div className="category-manage__cards">
                        {
                            category?.payload?.map((category) => (
                                <div key={category._id} className="category-manage__card">
                                    <h3 className="category-manage__title">{category.title.slice(0, 1).toUpperCase() + category.title.slice(1).toLowerCase()}</h3>
                                    <div className="category-manage__buttons">
                                        <button className="category-manage__button" onClick={() => setDeleteCategory(category._id)}><MdOutlineDeleteOutline /></button>
                                        <button className="category-manage__button" onClick={() => setEditCategory(category)}><CiEdit /></button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </dir>
            </div>
            {
                deleteCategory &&
                <DeleteModal title={"Category delete"} desc={"Are you sure you want to delete this category?"} setModalDelete={setDeleteCategory} modalDelete={deleteCategory} isDelete={false} />
            }
            {
                editCategory &&
                <EditModal setModalEdit={setEditCategory} modalEdit={editCategory} isEdit={true} title={"Edit Category"} />
            }
        </>
    )
}

export default CategoryManage 