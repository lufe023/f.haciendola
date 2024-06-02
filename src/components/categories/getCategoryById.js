import getConfig from "../utils/getConfig";
import axios from "axios";

const getCategoryById = (id, setCategory) => {
    const isLogged = localStorage.getItem("token");
    if (isLogged) {
        const URL = `${
            import.meta.env.VITE_API_SERVER
        }/api/v1/categories/${id}`;
        axios
            .get(URL, getConfig())
            .then((res) => {
                //aqui vamos a poner las categorias en redux para mejor manejo
                setCategory(res.data);
            })
            .catch((err) => console.log(err));
    } else {
        return null;
    }
};

export default getCategoryById;
