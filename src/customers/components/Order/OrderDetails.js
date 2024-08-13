import React, { useEffect } from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTreaker from "./OrderTreaker";
import { Box, Grid } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon  from "@mui/icons-material/StarBorder";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderById } from "../../../State/Order/Action";

const OrderDetails = () => {
  const {orderId}=useParams();

  const dispatch=useDispatch();
  
  const {order} =useSelector(store=>store);
  console.log("order deaitais",order);

  useEffect(()=>{
    dispatch(getOrderById(orderId))
  },[])


  return (
    <div className="px-5 lg:px-20 ">
      <div>
        <h1 className="font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard address={order.order?.shippingAddress}/>
      </div>


      <div className="py-20">
        <OrderTreaker activeStep={1} />
      </div>

      <Grid container className="space-y-5 ">
        {order?.order?.orderItems.map((value)=>
        <Grid
          item
          container
          className="shadow-xl rounded-md p-5 border"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Grid item xs={6}>
            <div className="flex items-center space-x-4">
              <img
                className="w-[5rem h-[5rem] object-cover object-top"
                src={value?.product?.image_url}
                alt=""
              />
              <div>
                <p className="font-semibold">{value?.product?.title}</p>
                <p className="space-x-5 opacity-50 text-xs font-semibold ">
                  <span>Color:{value?.product?.color}</span> <span>Size:{value?.size}</span>
                </p>
                <p className="text-green-500 font-bold">&#8377;{value?.product?.discountedPrice}</p>
              </div>
            </div>
          </Grid>

          <Grid item>
            <Box sx={{ color: deepPurple[500]}}>
              <StarBorderIcon sx={{ fontSize: "2rem" }} className="px-2" />
              <span>Rate and Review Product</span>
            </Box>
          </Grid>
        </Grid> )}
      </Grid>
    </div>
  );
};

export default OrderDetails;
