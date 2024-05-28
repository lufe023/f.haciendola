import getConfig from "./getConfig";
import { updateUsersSinceSevenDay } from "../../store/slices/dashboard.slice";
import axios from "axios";

const getUsersSinceSevenDays = (dispatch) => {
    const isLogged = localStorage.getItem("token");
    if (isLogged) {
        const URL = import.meta.env.VITE_API_SERVER;

        // Calcular la fecha de hace 7 días
        const sevenDaysAgo = new Date();
        sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

        const formatDate = (date) => {
            const yyyy = date.getFullYear();
            const mm = String(date.getMonth() + 1).padStart(2, "0");
            const dd = String(date.getDate()).padStart(2, "0");
            return `${yyyy}-${mm}-${dd}`;
        };

        const sevenDaysAgoFormatted = formatDate(sevenDaysAgo);

        // Solicitud para obtener usuarios de hace 7 días
        axios
            .get(
                `${URL}/api/v1/informs/usersbyday/${sevenDaysAgoFormatted}`,
                getConfig()
            )
            .then((res) => {
                dispatch(updateUsersSinceSevenDay(res.data)); // Aquí puedes actualizar el estado que necesites
            })
            .catch((err) => console.log(err));
    } else {
        return null;
    }
};

export default getUsersSinceSevenDays;
