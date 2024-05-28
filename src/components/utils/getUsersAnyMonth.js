import getConfig from "./getConfig";
import { updateUsersLastMonth } from "../../store/slices/dashboard.slice";
import axios from "axios";

const getUsersThisMonth = (dispatch, sinceMonth) => {
    const isLogged = localStorage.getItem("token");
    if (isLogged) {
        const URL = `${
            import.meta.env.VITE_API_SERVER
        }/api/v1/informs/usersbymonth/${sinceMonth}`;
        axios
            .get(URL, getConfig())
            .then((res) => {
                dispatch(updateUsersLastMonth(res.data));
            })
            .catch((err) => console.log(err));
    } else {
        return null;
    }
};

export default getUsersThisMonth;
