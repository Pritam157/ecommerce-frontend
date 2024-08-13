import { api, API_BASE_URL } from "../../config/ApiConfig";
import { CREATE_ORDER_FAILURE, CREATE_ORDER_REQUEST, CREATE_ORDER_SUCCESS, GET_ORDER_BY_ID_FAILURE, GET_ORDER_BY_ID_REQUEST, GET_ORDER_BY_ID_SUCCESS, GET_ORDER_HISTORY_FAILURE, GET_ORDER_HISTORY_REQUEST, GET_ORDER_HISTORY_SUCCESS, GET_ORDER_PLACED_FAILURE, GET_ORDER_PLACED_REQUEST, GET_ORDER_PLACED_SUCCESS } from "./ActionType";

export const createOrder=(reqData)=>async(dispatch)=>{
    console.log("req Data",reqData);
    dispatch({type:CREATE_ORDER_REQUEST})
    try {
        const {data} =await api.post(`${API_BASE_URL}/api/orders/`,reqData.address);

        if(data.id){
            reqData.nevigate({search:`step=3&order_id=${data.id}`})
        }

        console.log("create order -",data);
        dispatch({
            type:CREATE_ORDER_SUCCESS,
            payload:data,
        })
        
    } catch (error) {
        console.log("catch error :"+error);
        dispatch({
            type:CREATE_ORDER_FAILURE,
            payload: error.message
        })
    }
}

export const getOrderById=(orderId)=>async (dispatch)=>{
    dispatch({type:GET_ORDER_BY_ID_REQUEST});

    try {
        const {data} =await api.get(`api/orders/${orderId}`)
        console.log("order by id",data);
        dispatch({  type:GET_ORDER_BY_ID_SUCCESS,payload:data})
        
    } catch (error) {
        console.log("catch" ,error);
        dispatch({  type:GET_ORDER_BY_ID_FAILURE,payload:error.message})

    }
}

export const getOrderPlaced=(orderId)=>async (dispatch) =>{
      dispatch({type:GET_ORDER_PLACED_REQUEST})

      try {
         const {data} =await api.get(`api/orders/${orderId}/placed`)
         console.log("order placed" , data);
         dispatch({type:GET_ORDER_PLACED_SUCCESS,payload:data})
      } catch (error) {
         dispatch({type:GET_ORDER_PLACED_FAILURE,payload:error.message})
        
      }
}

export const getOrderHistory=()=>async(dispatch)=>{
      dispatch({type:GET_ORDER_HISTORY_REQUEST})

      try {
          const {data}=await api.get(`api/orders/user`);
          console.log("order history",data);
          dispatch({type:GET_ORDER_HISTORY_SUCCESS,payload:data})
      } catch (error) {
          dispatch({type:GET_ORDER_HISTORY_FAILURE,payload:error.message})
      }
}
