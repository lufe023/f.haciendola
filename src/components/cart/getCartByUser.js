import getConfig from "../utils/getConfig";
import { setCart } from "../../store/slices/cart.slice";
import axios from "axios";

const getCartByUser = (dispatch) => {
    const isLogged = localStorage.getItem("token");
    if (isLogged) {
        const URL = `${import.meta.env.VITE_API_SERVER}/api/v1/cart/`;
        axios
            .get(URL, getConfig())
            .then((res) => {
                dispatch(setCart(res.data));
            })
            .catch((err) => console.log(err));
    } else {
        return null;
    }
};

export default getCartByUser;
