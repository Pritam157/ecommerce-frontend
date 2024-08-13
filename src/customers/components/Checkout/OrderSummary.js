import React, { useEffect, useState } from "react";
import AddressCard from "../AddressCard/AddressCard";
import CartItem from "../Cart/CartItem";
import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";
import Payment from "../PaymentDetails/Payment";

const OrderSummary = () => {
  const dispatch=useDispatch();
  const location=useLocation();
  const {order}=useSelector(store=>store)
  const searchParamms=new URLSearchParams(location.search);
  const orderId=searchParamms.get("order_id")
  const navigate=useNavigate()

  useEffect(()=>{
      dispatch(getOrderById(orderId))
  },[orderId])

  const handleOpen = () => {
      navigate(`/checkout?step=4&order_id=${order?.order?.id}`)
  };

  const handleClose=()=>{
   
  }

  return (
    <div>
      <div className="p-5 shadow-lg rounded-s-md border">
        <AddressCard address={order.order?.shippingAddress}/>
      </div>
        <div>
          <div className="lg:grid grid-cols-3  relative">
            <div className="col-span-2">
              {order.order?.orderItems.map((value) => (
                <CartItem item={value}/>
              ))}
            </div>
 
            <div className="px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0">
              <div className="border">
                <p className="uppercase font-bold opacity-60 pb-4">
                  Price Details
                </p>
                <hr />
                <div className="space-y-3 font-semibold">
                  <div className="flex justify-between pt-3 text-black">
                    <span>Price</span>
                    <span>&#8377;{order.order?.totalPrice}</span>
                  </div>
                  <div className="flex justify-between pt-3 ">
                    <span>Discount</span>
                    <span className="text-green-600">-&#8377;{order.order?.discount}</span>
                  </div>
                  <div className="flex justify-between pt-3 ">
                    <span>Delivery Charge</span>
                    <span className="text-green-600">&#8377;Free</span>
                  </div>
                  <div className="flex justify-between pt-3 font-bold mb-10">
                    <span>Total Amount</span>
                    <span className="text-green-600">&#8377;{order.order?.totalDiscountedPrice}</span>
                  </div>

                  <Button
                    onClick={handleOpen}
                    variant="contained"
                    className="w-full mt-5"
                    sx={{ mt: "5", px: "2rem", py: "1rem", bgcolor: "#9155fd" }}
                  >
                    Checkout
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default OrderSummary;
