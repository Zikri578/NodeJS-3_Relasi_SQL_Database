import inquirer from "inquirer";
import { user_register } from "../controller/user_controller.js";

const register_view = () => {
    console.clear();
    console.log(`
        ===================================
        - Selamat Datang di Menu Register -
        ===================================
            Kamu Memilih Menu Register
    `);

    inquirer.prompt(
        [
            {
                name: "username",
                message: "Masukkan Username Anda : "
            },
            {
                name: "password",
                message: "Masukkan Password : ",
                type: "password"
            }
        ]
    )
        .then((answer) => {
            // memanggil variabel function di user_controller setelah mengisi username dan password
            user_register(answer.username, answer.password);

        }).catch((err) => {
            console.clear();
            console.error(err);
        });
}

export default register_view;