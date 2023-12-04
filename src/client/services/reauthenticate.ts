import Swal from "sweetalert2";
import { POST, TOKEN_KEY } from "./fetcher";

async function reauthenticate() {
    return Swal.fire({
        icon: "error",
        title: "Credentials invalid or expired",
        html: `<h6>Please re-enter your credentials here or return to the login page</h6>
                  <label>Email:</label> 
                  <input placeholder="nun@ya.buz" id="swal-input1" class="form-control">
                  <label>Password:</label> 
                  <input placeholder="hunter2" type="password" id="swal-input2" class="form-control">
                `,
        buttonsStyling: false,
        customClass: {
            confirmButton: "m-2 btn btn-primary",
            cancelButton: "m-2 btn btn-warning",
        },
        showCancelButton: true,
        cancelButtonText: "<strong><em>Return to Login</em></strong>",
        confirmButtonText: "<strong><em>Log In Bitch</em></strong>",
        toast: true,
        position: "bottom-right",
        width: "33vw",
        preConfirm: () => {
            const email = (document.getElementById("swal-input1") as HTMLInputElement).value as string;
            const password = (document.getElementById("swal-input2") as HTMLInputElement).value as string;
            return { email, password };
        },
    }).then((res) => {
        if (res.isDismissed) {
            window.location.href = "/login";
            return;
        }
        const { email, password } = res.value;
        if (email && password) {
            POST<any>("/auth/login", { email, password }).then((data) => {
                localStorage.setItem(TOKEN_KEY, data.token);
                Swal.fire(data.message);
            });
        }
    });
}

export default reauthenticate;
