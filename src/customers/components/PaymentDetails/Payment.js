import React from "react";
import Button from "@mui/material/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getOrderPlaced } from "../../../State/Order/Action";

const Payment = () => {
    const location=useLocation()
    const nevigate=useNavigate();
    const dispatch=useDispatch();
    const searchParamms=new URLSearchParams(location.search);
    const orderId=searchParamms.get("order_id")
    

    const redirectToOrderStatus=()=>{
        dispatch(getOrderPlaced(orderId))
        nevigate(`/account/order`)
    }



  return (
    <>
      <div className="text-center  text-red-500">
        <h1 className="text-2xl">Payment Under Maintaines</h1>
        <h3>Click Here for Payment Successful</h3>
        <Button variant="contained" onClick={redirectToOrderStatus}  sx={{bgcolor: "#9155fd"}}>Click Here</Button>
      </div>
    </>
  );
};

export default Payment;
