import axios from "axios"
import { Auth_Error, Auth_Loading, Auth_Logout, Auth_Success } from "./auth.types"


export const login= (creds)=> async(dispatch)=>{
  
    dispatch({type:Auth_Loading})
    try{
        let res = await  axios.post(`https://intense-escarpment-00926.herokuapp.com/users/login`, creds)
        dispatch({type: Auth_Success, payload: res.data})
             return res.data
    }catch(e){
           alert("Wrong Credential")
              dispatch({type: Auth_Error})
    }
            

}

export const logout= ()=>{
    return({type: Auth_Logout})
    
} 