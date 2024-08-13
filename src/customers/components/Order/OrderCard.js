import React from "react";
import { Grid } from "@mui/material";
import Adjust from "@mui/icons-material/Adjust";
import { useNavigate } from "react-router-dom";

const OrderCard = ({ item }) => {
  const navigate = useNavigate();
  console.log("item", item);
  

  return (
    <div
      onClick={() => navigate(`/account/order/${item.id}`)}
      className="p-5 shadow-lg shadow-black hover:shadow-2xl border"
    >
      <Grid container spacing={2} sx={{ justifyContent: "space-between" }}>
        <Grid item xs={6}>
          <div className="flex cursor-pointer">
              <div className="ml-5 space-y-2">
                <p className="">Order ID : {item.id}</p>
                <p className="opacity-50 text-xs font-semibold">Total Items : {item.orderItems.length}</p>
                <p className="opacity-50 text-xs font-semibold">Order Status: {item.orderStatus}</p>
              </div>
          </div>
        </Grid>

        <Grid item xs={2}>
          <p>&#8377;{item.totalDiscountedPrice}</p>
        </Grid>

        <Grid item xs={4}>
          <div>
            <Adjust
              sx={{ width: "15px", height: "15px" }}
              className="text-green-600 mr-2 text-sm"
            />
            <span>Order Create At {item.orderDate.toString().slice(0,10)}</span>
          </div>
          <div>
            <span>Expected Deliverey On After Three days of Order Created Date</span>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
