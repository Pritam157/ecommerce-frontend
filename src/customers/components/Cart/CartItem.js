import React from "react";
import { Button, IconButton } from "@mui/material";
import RemoveCircleOutline from '@mui/icons-material/RemoveCircleOutline'
import AddCircleOutline from '@mui/icons-material/AddCircleOutline'
import { useDispatch } from "react-redux";
import { removeCartItem, updateCartItem } from "../../../State/Cart/Action";

const CartItem = ({item}) => {

  const dispatch=useDispatch();

  const handleUpadateCartItem=(num)=>{
        const data={quantity:item.quantity+num,cartItemId:item.id}
        dispatch(updateCartItem(data))
  }

  const handleRemoveCartItem=()=>{
        dispatch(removeCartItem(item?.id))
  }
  return (
    <div className="p-5 shadow-lg border rounded-md">
      <div className="flex items-center">
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top "
            src={item.product?.image_url}
            alt="no internate"
          />
        </div>

        <div className="ml-5 space-y-1">
          <p className="font-semibold">{item.product?.title}</p>
          <p className="opacity-70">Size: {item?.size},{item.product?.color}</p>
          <p className="opacity-70 mt-2">{item.product?.brand}</p>

          <div className="flex space-x-5 items-center  text-gray-900 pt-6">
            <p className="font-semibold">&#8377;{item?.discountedPrice}</p>
            <p className="opacity-50 line-through">&#8377;{item?.price}</p>
            <p className="text-green-600 font-semibold">{item?.product?.discountPercent}% off</p>
          </div>
        </div>
      </div>

      <div className="lg:flex  items-center lg:space-x-10 pt-4 ">
        <div className="flex items-center space-x-2">
          <IconButton onClick={()=>handleUpadateCartItem(-1)} disabled={item?.quantity<=1}>
            <RemoveCircleOutline />
          </IconButton>
          <span className="py-1 px-7 border rounded-sm">{item.quantity}</span>
          <IconButton style={{ color: "rgb(145,85,253)" }} onClick={()=>handleUpadateCartItem(1)}>
            <AddCircleOutline />
          </IconButton>
        </div>

        <div>
          <Button onClick={handleRemoveCartItem} style={{ color: "rgb(145,85,253)" }}>romove</Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
