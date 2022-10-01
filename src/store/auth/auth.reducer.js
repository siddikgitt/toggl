import { logout } from "./auth.actions"
import { Auth_Error, Auth_Loading, Auth_Logout, Auth_Success } from "./auth.types"

let tokens  = JSON.parse(localStorage.getItem("token")) || ""
let initialState = {
    loading : false,
    error: false,
    token:  tokens
}

export const authReducer = (state = initialState, {type, payload})=>{
   
       switch (type){
        case Auth_Loading:{
            return {
                ...state,
                loading: true,
                
            }
        }
        case Auth_Success: {
            if(payload.token){
                localStorage.setItem("token", JSON.stringify(payload.token))
            }
            return {
                ...state,
                loading: false,
                token : payload.token,
                error:  false
            }
        }
        case Auth_Error: {
            return{
                ...state,
                error: true
            }
        }
        case Auth_Logout:{
            localStorage.removeItem("token")
            return{
                ...state,
                token : "",
            }
        }
          default :{
            return state
          }
       }
}