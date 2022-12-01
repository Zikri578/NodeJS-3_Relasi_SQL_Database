import inquirer from "inquirer";
import login_view from "./views/login.js";
import register_view from "./views/register.js";

const play = () => {

    console.log(`
        ==========================================
                SELAMAT DATANG DI APP NOTE
        ==========================================
        Silahkan Pilih Menu yang ada dibawah ini :
    `);

    inquirer.prompt(
        [
            {
                name: "menu",
                message: "Masukkan pilihan : ",
                type: "list",
                choices: ['Register', 'Login', 'Exit']
            }
        ]
    )
        .then((answer) => {

            // melakukan pengkondisian dengan memilih menu diatas
            switch (answer.menu) {
                case "Register":
                    // memanggil function di register.js
                    register_view();
                    break;

                case "Login":
                    // memanggil function login.js
                    login_view();
                    break;

                default:
                    console.clear();
                    console.log(`
                                            ============================
                                                  - Terima Kasih -
                                            ============================
                        Kamu Memilih Menu Exit, Terima Kasih sudah mengunjungi website kami..!
                    `);
                    break;
            }
        }).catch((err) => {
            console.error(err);
        });
}

play();