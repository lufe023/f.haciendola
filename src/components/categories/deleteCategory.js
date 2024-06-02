import { useNavigate } from "react-router-dom";
import getConfig from "../utils/getConfig";
import axios from "axios";
import Swal from "sweetalert2";

const deleteCategory = (id, categoryName, navigate) => {
    const URL = `${import.meta.env.VITE_API_SERVER}/api/v1/categories/${id}`;

    const Toast = Swal.fire({
        title: "¿Estás seguro?",
        html: `se eliminará la categoría <b>${categoryName}</b>, esta acción no se puede deshacer`,
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, Borrarlo!",
    }).then((result) => {
        if (result.isConfirmed) {
            axios
                .delete(URL, getConfig())
                .then((res) => {
                    Swal.fire({
                        title: "Categoría Eliminada!",
                        html: `La categoría <b> ${categoryName} </b> ha sido eliminada con exito`,
                        icon: "success",
                    });
                    navigate("/categories");
                    // Limpia la ruta almacenada en el estado local
                    localStorage.removeItem("redirectPath");
                })
                .catch((err) => {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: "top-end",
                        showConfirmButton: false,
                        timer: 6000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener(
                                "mouseenter",
                                Swal.stopTimer
                            );
                            toast.addEventListener(
                                "mouseleave",
                                Swal.resumeTimer
                            );
                        },
                    });

                    console.log(err);
                    Toast.fire({
                        icon: "error",
                        title: `Al parecer hay Productos que contienen esta categoría`,
                    });
                });
        }
    });
};

export default deleteCategory;
