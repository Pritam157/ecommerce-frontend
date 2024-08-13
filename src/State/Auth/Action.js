import axois from 'axios'
import { API_BASE_URL } from '../../config/ApiConfig'
import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, REGISTAR_FAILURE, REGISTAR_REQUEST, REGISTAR_SUCCESS } from './ActionTypes';


const token=localStorage.getItem("jwt")
const registerRequest=()=>({type:REGISTAR_REQUEST});
const registerSuccess=(user)=>({type:REGISTAR_SUCCESS,payload:user});
const registerFailure=(error)=>({type:REGISTAR_FAILURE,payload:error});


export const register=(userData)=> async (dispatch)=>{
    
    dispatch(registerRequest())
         
    try {
      const response=await axois.post(`${API_BASE_URL}/auth/signup`,userData);
      const user=response.data;
      if(user.jwt){
          localStorage.setItem("jwt",user.jwt);
      }
      console.log("user",user);
      dispatch(registerSuccess(user.jwt))
    }catch (error) {
        dispatch(registerFailure(error.message))
    }


}

const loginRequest=()=>({type:LOGIN_REQUEST});
const loginSuccess=(user)=>({type:LOGIN_SUCCESS,payload:user});
const loginFailure=(error)=>({type:LOGIN_FAILURE,payload:error});



export const login=(userData)=> async (dispatch)=>{
    
    dispatch(loginRequest())
         
    try {
      const response=await axois.post(`${API_BASE_URL}/auth/signin`,userData);
      const user=response.data;
      if(user.jwt){
          localStorage.setItem("jwt",user.jwt);
      }
      console.log("user",user);
      dispatch(loginSuccess(user.jwt))
    }catch (error) {
        dispatch(loginFailure(error.message))
    }


}


const getUserRequest=()=>({type:GET_USER_REQUEST});
const getUserSuccess=(user)=>({type:GET_USER_SUCCESS,payload:user});
const getUserFailure=(error)=>({type:GET_USER_FAILURE,payload:error});

export const getUser=(jwt)=> async (dispatch)=>{
    
    dispatch(getUserRequest())
         
    try {
      const response=await axois.get(`${API_BASE_URL}/api/users/profile`,{
        headers:{
            "Authorization":`Bearer ${jwt}`
        }
      });
      const user=response.data;
      console.log("user",user);
      dispatch(getUserSuccess(user))
    }catch (error) {
        dispatch(getUserFailure(error.message))
    }


}

export const logout=()=>(dispatch)=>{
     dispatch({type:'LOGOUT',payload:null})
     localStorage.clear();
}