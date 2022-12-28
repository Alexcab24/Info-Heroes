import { checkinCredentials, login, logout } from "."
import { singInWithGoogle, logoutFirebase } from "../../firebase/providers"

export const startGoogleSingIn = () =>{
return async(dispatch) =>{
    dispatch(checkinCredentials())
   const result = await singInWithGoogle();


   if(!result.ok) return dispatch (logout(result.errorMessage));

   dispatch(login(result))
}
}
export const startLogout = () =>{
    return async (dispatch) =>{

        await logoutFirebase();

        dispatch(logout({})); 
    }

}