import { useDispatch } from "react-redux";
import { deleteAllCart } from "../../../../context/slices/cartSlice";
import { CgClose } from "react-icons/cg";
import "./order.scss";
const Order = ({ setModalOrder, modalOrder, }) => {
  let dispatch = useDispatch()
  const handelCart = () => {
    dispatch(deleteAllCart())
  }

  return (
    <>
      <div className="order-modal" >
        <div onClick={handelCart} className="order-modal__overlay"></div>
        <div className="order-modal__wrapper">
          <div className="order-modal__top">
            <h3 className="">Cart order</h3>
            <button onClick={handelCart} className="order-modal__close-btn"><CgClose /></button>
          </div>
          <p className="order-modal__text">Your cart is empty</p>
          <div className="order-modal__bottom">
            <button onClick={handelCart} className="order-modal__button">Ok</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Order