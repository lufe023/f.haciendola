import getConfig from "./getConfig";
import { updateUsersToday } from "../../store/slices/dashboard.slice";
import axios from "axios";

const getUsersToday = (dispatch) => {
    const isLogged = localStorage.getItem("token");
    if (isLogged) {
        const URL = `${
            import.meta.env.VITE_API_SERVER
        }/api/v1/informs/userstoday`;
        axios
            .get(URL, getConfig())
            .then((res) => {
                dispatch(updateUsersToday(res.data));
            })
            .catch((err) => console.log(err));
    } else {
        return null;
    }
};

export default getUsersToday;
