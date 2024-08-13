import React, { useEffect } from "react";
import {
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
} from "@mui/material";
import OrderCard from "./OrderCard";
import { useDispatch, useSelector } from "react-redux";
import { getOrderHistory } from "../../../State/Order/Action";
import { useLocation, useNavigate } from "react-router-dom";

const orderStatus = [
  { lable: "ALL", value: "all" },
  { lable: "On The Way", value: "on_the_way" },
  { lable: "Delivered", value: "delevered" },
  { lable: "cancelled", value: "cancelled" },
  { lable: "returned", value: "returned" },
];

const Order = () => {
  const dispach = useDispatch();
  const { order } = useSelector((store) => store);
  const location = useLocation();
  const nevigate = useNavigate();

  const handlerRadiobuttonChange = (e) => {
    const searchParamms = new URLSearchParams(location.search);

    if(e.target.value==='all'){
           searchParamms.delete("status")
    }else{

      searchParamms.set("status", e.target.value);
    }

    const query = searchParamms.toString();
    nevigate({ search: `?${query}` });
  };

  useEffect(() => {
    dispach(getOrderHistory());
  }, []);
  return (
    <div className="px:5lg:px-20 mt-5">
      <Grid container sx={{ justifyContent: "space-between" }}>
        <Grid item xs={2.5}>
          <div className="h-auto shadow-lg bg-white p-5 sticky top-5">
            <h1 className="font-bold text-lg ">Filter</h1>
            <div className="space-y-4 mt-10">
              <h1 className="font-semibold">ORDER STATUS</h1>
              <FormControl>
                <div className="space-y-4">
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="radio-buttons-group"
                  >
                    {orderStatus.map((option) => {
                      return (
                        <FormControlLabel
                          value={option.value}
                          control={<Radio />}
                          label={option.lable}
                          onChange={(e) => handlerRadiobuttonChange(e)}
                        />
                      );
                    })}
                  </RadioGroup>
                </div>
              </FormControl>
            </div>
          </div>
        </Grid>

        <Grid item xs={9}>
          <div className="space-y-5">
            {order?.orders.map((value) => {
              return <OrderCard item={value} />;
            })}
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Order;

{
  /* <div className="flex items-center">
                    <input
                      defaultValue={option.value}
                      type="checkbox"
                      className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-500"
                    />
                    <label
                      htmlFor={option.lable}
                      className="ml-3 text-sm text-gray-600"
                    >
                      {option.lable}
                    </label>
                  </div> */
}
