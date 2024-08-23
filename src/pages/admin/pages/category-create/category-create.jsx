import { useState, useEffect } from "react";
import { useCreateCategoryMutation } from "../../../../context/api/categoryApi";
import { message } from "antd";
import "./category-create.scss";

const CategoryCreate = () => {
    const [categoryName, setCategoryName] = useState("");
    const [categoryCreate, { isSuccess, isLoading, isError }] = useCreateCategoryMutation();
    const [messageApi, contextHolder] = message.useMessage();

    useEffect(() => {
        if (isSuccess) {
            setCategoryName("");
            messageApi.success({
                content: 'Category created successfully!',
                duration: 3,
                style: {
                    marginTop: '2px',
                },
            });
        } else if (isError) {
            messageApi.error({
                content: 'Category created failed!',
                duration: 3,
                style: {
                    marginTop: '2px',
                },
            });
        }
    }, [isSuccess, messageApi, isError]);

    const handleCategory = (e) => {
        e.preventDefault();
        categoryCreate({ title: categoryName });
    };

    return (
        <>
            {contextHolder}
            <div className="category-create">
                <div className="category-create__wrapper">
                    <h1 className="category-create__title">Category Create</h1>
                    <form onSubmit={handleCategory} className="category-create__form">
                        <div className="category-create__card">
                            <label className="category-create__label" htmlFor="category-name">Category Name</label>
                            <input
                                value={categoryName}
                                onChange={(e) => setCategoryName(e.target.value)}
                                className="category-create__input"
                                id="category-name"
                                type="text"
                                placeholder="Category Name"
                            />
                        </div>
                        <div className="category-create__button-wrapper">
                            <button type="submit" disabled={isLoading} className="category-create__button">Create</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default CategoryCreate;
