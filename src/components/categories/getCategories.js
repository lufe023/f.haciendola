import getConfig from "../utils/getConfig";
import { updateCategories } from "../../store/slices/dashboard.slice";
import axios from "axios";

const getAllCategories = (dispatch) => {
    const isLogged = localStorage.getItem("token");
    if (isLogged) {
        const URL = `${import.meta.env.VITE_API_SERVER}/api/v1/categories`;
        axios
            .get(URL, getConfig())
            .then((res) => {
                //aqui vamos a poner las categorias en redux para mejor manejo
                dispatch(updateCategories(res.data.categories));
            })
            .catch((err) => console.log(err));
    } else {
        return null;
    }
};

export default getAllCategories;
