import getConfig from "./getConfig";
import { updateUsersThisMonth } from "../../store/slices/dashboard.slice";
import axios from "axios";

const getUsersThisMonth = (dispatch) => {
    const isLogged = localStorage.getItem("token");
    if (isLogged) {
        const URL = `${
            import.meta.env.VITE_API_SERVER
        }/api/v1/informs/usersthismonth`;
        axios
            .get(URL, getConfig())
            .then((res) => {
                dispatch(updateUsersThisMonth(res.data));
            })
            .catch((err) => console.log(err));
    } else {
        return null;
    }
};

export default getUsersThisMonth;
