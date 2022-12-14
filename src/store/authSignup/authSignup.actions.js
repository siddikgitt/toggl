import axios from "axios";
import { Auth_Success } from "../auth/auth.types";
import {
  Auth_Signup_Error,
  Auth_Signup_Loading,
  Auth_Signup_Success,
} from "./authSignup.types";

export const signup = (creds) => async (dispatch) => {
  dispatch({ type: Auth_Signup_Loading });
  try {
    let res = await axios.post(
      `https://web-production-fc34.up.railway.app/users/signup`,
      creds
    );
    dispatch({ type: Auth_Signup_Success, payload: res.data });
    dispatch({ type: Auth_Success, payload: res.data });

    return res.data;
  } catch (e) {
    dispatch({ type: Auth_Signup_Error });
  }
};
