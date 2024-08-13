import { GET_USER_FAILURE, GET_USER_REQUEST, GET_USER_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT, REGISTAR_FAILURE, REGISTAR_REQUEST, REGISTAR_SUCCESS } from "./ActionTypes"

const initialState={
    user:null,
    isLoading:false,
    error:null,
    jwt:null
}
export const authReducer=(state=initialState,action)=>{
     switch(action.type){
        case REGISTAR_REQUEST:
        case LOGIN_REQUEST:
        case GET_USER_REQUEST:
            return {...state,isLoading:true,error:null}
        
        case REGISTAR_SUCCESS:
        case LOGIN_SUCCESS:
              return {...state,isLoading:false,error:null,jwt:action.payload}
        case GET_USER_SUCCESS:
            return {...state,isLoading:false,error:null,user:action.payload}

        case REGISTAR_FAILURE:
        case LOGIN_FAILURE:
        case GET_USER_FAILURE:
            return {...state,isLoading:false,error:action.payload}

        case LOGOUT:
            return {...initialState}
        default:
            return state;
     }
}

