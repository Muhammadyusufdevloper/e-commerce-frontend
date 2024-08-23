import { memo, useState } from "react"
import "./product-create.scss"
import { PlusOutlined } from '@ant-design/icons';
import { Image, Upload } from 'antd';
const getBase64 = (file) =>
  new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = (error) => reject(error);
  });
const ProductCreate = () => {
  const [previewOpen, setPreviewOpen] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }
    setPreviewImage(file.url || file.preview);
    setPreviewOpen(true);
  };
  const [fileList, setFileList] = useState([])
  const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);
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
  return (
    <>
      <div className="product-create">
        <div className="product-create__wrapper">
          <h1 className="product-create__title">Product Create</h1>
          <form className="product-create__form">
            <div className="product-create__cards">
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-name">Product Name</label>
                <input className="product-create__input" id="product-name" type="text" placeholder="Product Name" />
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-price">Product Price</label>
                <input className="product-create__input" id="product-price" type="number" placeholder="Product Price" />
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-old-price">Product Old Price</label>
                <input className="product-create__input" id="product-old-price" type="text" placeholder="Product Old Price" />
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-stock">Product Stock</label>
                <input className="product-create__input" id="product-stock" type="text" placeholder="Product Stock" />
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-unit">Product Units</label>
                <select id="product-unit" className="product-create__select">
                  <option value="phone">phone</option>
                </select>
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-category">Product Category</label>
                <select id="product-category" className="product-create__select">
                  <option value="phone">phone</option>
                </select>
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-info">Product Info</label>
                <textarea className="product-create__textarea" placeholder="Product Info" id="product-info"></textarea>
              </div>
              <div className="product-create__card">
                <label className="product-create__label" htmlFor="product-desc">Product Description</label>
                <textarea className="product-create__textarea" placeholder="Product Description" id="product-desc"></textarea>
              </div>
            </div>

            <Upload
              action="https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload"
              listType="picture-card"
              fileList={fileList}
              onPreview={handlePreview}
              onChange={handleChange}
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
              <button className="product-create__button">Create</button>
            </div>
          </form>
        </div>
      </div>
    </>
  )
}

export default memo(ProductCreate)