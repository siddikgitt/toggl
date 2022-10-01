
import { Auth_Signup_Error, Auth_Signup_Loading, Auth_Signup_Logout, Auth_Signup_Success } from "./authSignup.types"

let tokens  = JSON.parse(localStorage.getItem("token")) || ""
let initialState = {
    loading : false,
    error: false,
    token:  tokens
}

export const authSignupReducer = (state = initialState, {type, payload})=>{
   
       switch (type){
        case Auth_Signup_Loading:{
            return {
                ...state,
                loading: true,
                
            }
        }
        case Auth_Signup_Success: {
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
        case Auth_Signup_Error: {
            return{
                ...state,
                error: true
            }
        }
        
          default :{
            return state
          }
       }
}
