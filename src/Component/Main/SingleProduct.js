import React, { useContext, useState } from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { FiDelete } from "react-icons/fi";
import { GlobalStore } from "../../Context/GlobalContext";

const SingleProduct = () => {
  const [show, setShow] = useState(false);
  const { cartItem, addTocart, removeItem, decreaseItem } =
    useContext(GlobalStore);
  // calculate item price
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  // console.log(cartItem);
  return (
    <>
      <section className="cart-container">
        <div className="main-cart">
          <div className="single-product-container">
            {cartItem.length === 0 && (
              <div className="empty-product">
                <h2>No item are Added in Cart</h2>
              </div>
            )}
            {cartItem.map((item) => {
              return (
                <div key={item.id} className="single-product">
                  <img src={item.imageurl} alt="hello" />
                  <div className="p-info">
                    <b className="pname">{item.name}</b>
                    <p className="price">
                      &#8377; {item.price} * {item.qty}
                    </p>
                  </div>
                  <div className="btn">
                    <button
                      className="remove-product"
                      onClick={() => removeItem(item)}
                    >
                      <FiDelete />
                    </button>
                    <div className="add-product">
                      <button
                        className="increment"
                        onClick={() => addTocart(item)}
                      >
                        <AiOutlinePlus />
                      </button>
                      <button
                        className="decrement"
                        onClick={() => decreaseItem(item)}
                      >
                        <AiOutlineMinus />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="cart-total-product">
            <h2>Cart Summary</h2>
            <div className="cart-total">
              <h4>Total Price :</h4>
              <span>&#8377; {totalPrice}.00</span>
            </div>
          </div>
        </div>
        {/* order place ----------------------- */}
        <div className="place-product">
          <div className="cart-total">
            <h4>Total summary :</h4>
            <span>&#8377; {totalPrice}.00</span>
          </div>
          <button className="place-btn" onClick={() => setShow(!show)}>
            Place Order
          </button>
          <p>-- Your order is eligible for FREE Delivery</p>
        </div>
        {/* =======================================  */}
        <div className={show ? "order-place-container" : " order-hide"}>
          <h2>
            <span>Congratulations. !</span> your order is placed .
          </h2>
        </div>
      </section>
    </>
  );
};
export default SingleProduct;
