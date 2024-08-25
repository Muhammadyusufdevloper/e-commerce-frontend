import { memo, useEffect, useState } from "react";
import "./product-create.scss";
import { PlusOutlined } from '@ant-design/icons';
import { Image, message, Upload } from 'antd';
import { useGetCategoriesQuery } from "../../../../context/api/categoryApi";
import { useCreateProductMutation } from "../../../../context/api/productApi";

const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });

const initialState = {
  title: '',
  price: '',
  oldPrice: '',
  stock: '',
  units: '',
  categoryId: '',
  info: '',
  desc: '',
  photos: []
};

const ProductCreate = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [productData, setProductData] = useState(initialState);
  const { data: category } = useGetCategoriesQuery();
  const [createProduct, { isLoading, isSuccess, isError }] = useCreateProductMutation();

  const [messageApi, contextHolder] = message.useMessage();

  useEffect(() => {
    if (isSuccess) {
      messageApi.success('Product created successfully!');
    } else if (isError) {
      messageApi.error('Product creation failed!');
    }
  }, [isSuccess, isError, messageApi]);

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };

  const [fileList, setFileList] = useState([]);
  const handleImageChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    setProductData({
      ...productData,
      photos: newFileList.map(file => file.originFileObj),
    });
  };

  const uploadButton = (
    <button
      style={{
        border: 0,
        background: 'none',
      }}
      type="button"
    >
      <PlusOutlined />
      <div
        style={{
          marginTop: 8,
        }}
      >
        Image upload
      </div>
    </button>
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData({
      ...productData,
      [name]: value,
    });
  };

  useEffect(() => {
    if (isSuccess) {
      setProductData(initialState);
      setFileList([]);
    }
  }, [isSuccess]);


  const handleCreate = async (e) => {
    e.preventDefault();
    const form = new FormData();

    form.append("title", productData.title);
    form.append("price", +productData.price);
    form.append("oldPrice", +productData.oldPrice);
    form.append("categoryId", productData.categoryId);
    form.append("stock", productData.stock);
    form.append("units", productData.units);
    form.append("desc", productData.desc);
    form.append("info", JSON.stringify([...productData.info]));

    productData.photos.forEach((photo) => {
      form.append("photos", photo);
    });

    await createProduct(form);
  };

  return (
    <>
      {contextHolder} {/* Message context */}
      <div className="product-create">
        <div className="product-create__wrapper">
          <h1 className="product-create__title">Product Create</h1>
          <form className="product-create__form" onSubmit={handleCreate}>
            <div className="product-create__cards">
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-name">Product Name</label>
                <input
                  className="product-create__input"
                  id="product-name"
                  type="text"
                  name="title"
                  value={productData.title}
                  onChange={handleChange}
                  placeholder="Product Name"
                />
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-price">Product Price</label>
                <input
                  className="product-create__input"
                  id="product-price"
                  type="number"
                  name="price"
                  value={productData.price}
                  onChange={handleChange}
                  placeholder="Product Price"
                />
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-old-price">Product Old Price</label>
                <input
                  className="product-create__input"
                  id="product-old-price"
                  type="number"
                  name="oldPrice"
                  value={productData.oldPrice}
                  onChange={handleChange}
                  placeholder="Product Old Price"
                />
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-stock">Product Stock</label>
                <input
                  className="product-create__input"
                  id="product-stock"
                  type="number"
                  name="stock"
                  value={productData.stock}
                  onChange={handleChange}
                  placeholder="Product Stock"
                />
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-unit">Product Units</label>
                <select
                  id="product-unit"
                  className="product-create__select"
                  name="units"
                  value={productData.units}
                  onChange={handleChange}
                >
                  <option value="piece">Piece (pcs)</option>
                  <option value="kilogram">Kilogram (kg)</option>
                  <option value="gram">Gram (g)</option>
                  <option value="liter">Liter (L)</option>
                  <option value="milliliter">Milliliter (mL)</option>
                  <option value="meter">Meter (m)</option>
                  <option value="centimeter">Centimeter (cm)</option>
                  <option value="inch">Inch (in)</option>
                  <option value="square_meter">Square Meter (m²)</option>
                  <option value="cubic_meter">Cubic Meter (m³)</option>
                  <option value="pack">Pack (pk)</option>
                  <option value="box">Box (bx)</option>
                  <option value="dozen">Dozen (dz)</option>
                  <option value="pair">Pair (pr)</option>
                  <option value="set">Set (set)</option>
                </select>
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-category">Product Category</label>
                <select
                  id="product-category"
                  className="product-create__select"
                  name="categoryId"
                  value={productData.categoryId}
                  onChange={handleChange}
                >
                  {
                    category?.payload?.map((item) => (
                      <option key={item._id} value={item._id}>
                        {item.title.charAt(0).toUpperCase() + item.title.slice(1).toLowerCase()}
                      </option>
                    ))
                  }
                </select>
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-info">Product Info</label>
                <textarea
                  className="product-create__textarea"
                  id="product-info"
                  name="info"
                  value={productData.info}
                  onChange={handleChange}
                  placeholder="Product Info"
                />
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-desc">Product Description</label>
                <textarea
                  className="product-create__textarea"
                  id="product-desc"
                  name="desc"
                  value={productData.desc}
                  onChange={handleChange}
                  placeholder="Product Description"
                />
              </div>
            </div>

            <Upload
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleImageChange}
            >
              {fileList.length >= 8 ? null : uploadButton}
            </Upload>

            {previewImage && (
              <Image
                wrapperStyle={{
                  display: 'none',
                }}
                preview={{
                  visible: previewOpen,
                  onVisibleChange: (visible) => setPreviewOpen(visible),
                  afterOpenChange: (visible) => !visible && setPreviewImage(''),
                }}
                src={previewImage}
              />
            )}
            <div className="product-create__button-wrapper">
              <button className="product-create__button" type="submit">Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default memo(ProductCreate);
