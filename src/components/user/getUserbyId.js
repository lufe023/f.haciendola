import getConfig from "../utils/getConfig";
import { setUserData } from "../../store/slices/user.slice";
import axios from "axios";

const getUserbyId = (dispatch) => {
    const isLogged = localStorage.getItem("token");
    if (isLogged) {
        const URL = `${import.meta.env.VITE_API_SERVER}/api/v1/users/me`;
        axios
            .get(URL, getConfig())
            .then((res) => {
                dispatch(setUserData(res.data));
            })
            .catch((err) => console.log(err));
    } else {
        return null;
    }
};

export default getUserbyId;
