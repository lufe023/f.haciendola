import getConfig from "../utils/getConfig";
import axios from "axios";

const getCategoryById = (id, setCategory) => {
    let URL = `${import.meta.env.VITE_API_SERVER}/api/v1/categories/${id}`;
    axios
        .get(URL, getConfig())
        .then((res) => {
            setCategory(res.data);
        })
        .catch((err) => console.log(err));
};

export default getCategoryById;
