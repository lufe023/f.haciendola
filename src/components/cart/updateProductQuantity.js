import getConfig from "../utils/getConfig";
import { setCart } from "../../store/slices/cart.slice";
import axios from "axios";

const updateProductQuantity = (dispatch, id, quantity) => {
    const isLogged = localStorage.getItem("token");
    if (isLogged) {
        const URL = `${
            import.meta.env.VITE_API_SERVER
        }/api/v1/cart/products/${id}`;
        axios
            .patch(URL, { quantity: quantity }, getConfig())
            .then((res) => {
                dispatch(setCart(res.data));
            })
            .catch((err) => console.log(err));
    } else {
        return null;
    }
};

export default updateProductQuantity;
