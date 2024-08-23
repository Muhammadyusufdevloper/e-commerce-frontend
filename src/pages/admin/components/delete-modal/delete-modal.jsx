import "./delete-modal.scss";
import "primereact/resources/themes/lara-light-cyan/theme.css";
import { CgClose } from "react-icons/cg";
import { useDeleteProductMutation } from "../../../../context/api/productApi";
import { useEffect } from "react";
import { useDeleteCategoryMutation } from "../../../../context/api/categoryApi";

const DeleteModal = ({ setModalDelete, modalDelete, isDelete, title, desc }) => {
    const [deleteProduct, { isSuccess: productSuccess }] = useDeleteProductMutation();
    const [deleteCategory, { isSuccess: categorySuccess }] = useDeleteCategoryMutation();
    useEffect(() => {
        if (productSuccess || categorySuccess) {
            setModalDelete(null)
        }
    }, [productSuccess, categorySuccess])

    const handelDelete = () => {
        if (isDelete) {
            deleteProduct(modalDelete)
            setModalDelete(null)
        } else {
            deleteCategory(modalDelete)
            setModalDelete(null)
        }
    }
    return (
        <div className="delete-modal" >
            <div onClick={() => setModalDelete(null)} className="delete-modal__overlay"></div>
            <div className="delete-modal__wrapper">
                <div className="delete-modal__top">
                    <h3 className="">{title}</h3>
                    <button onClick={() => setModalDelete(null)} className="delete-modal__close-btn"><CgClose /></button>
                </div>
                <p className="delete-modal__text">{desc}</p>
                <div className="delete-modal__bottom">
                    <button onClick={() => setModalDelete(null)} className="delete-modal__button">Close</button>
                    <button onClick={handelDelete} className="delete-modal__button">Delete</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteModal