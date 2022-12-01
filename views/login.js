import inquirer from "inquirer";
import { user_login } from "../controller/user_controller.js";

const login_view = () => {
    console.clear();
    console.log(`
        ================================
        - Selamat Datang di Menu Login -
        ================================
            Kamu Memilih Menu Login
    `);

    inquirer.prompt(
        [
            {
                name: "username",
                message: "Masukkan Username Anda : "
            },
            {
                name: "password",
                message: "Masukkan Password Anda : ",
                type: "password"
            }
        ]
    )
        .then((answer) => {
            // memanggil variabel function di user_controller setelah mengisi username dan password
            user_login(answer.username, answer.password);

        }).catch((err) => {
            console.clear();
            console.error(err);
        });
}

export default login_view;