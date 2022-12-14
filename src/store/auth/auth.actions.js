import axios from "axios";
import {
  Auth_Error,
  Auth_Loading,
  Auth_Logout,
  Auth_Success,
} from "./auth.types";

export const login = (creds) => async (dispatch) => {
  dispatch({ type: Auth_Loading });
  try {
    let res = await axios.post(
      `https://web-production-fc34.up.railway.app/users/login`,
      creds
    );
    dispatch({ type: Auth_Success, payload: res.data });
    return res.data;
  } catch (e) {
    alert("Wrong Credential");
    dispatch({ type: Auth_Error });
  }
};

export const logout = () => async (dispatch) => {
  dispatch({ type: Auth_Logout });
};
