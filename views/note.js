import inquirer from "inquirer";
import note_create from "../controller/notes_controller.js";

// membuat variabel note_view
const note_view = (user_id) => {
    console.clear();
    console.log(`
    
    =======================
    ----- Tambah Note -----   
    =======================
    `);

    inquirer.prompt(
        [
            {
                name: "title",
                message: "Masukkan Judul : "
            },
            {
                name: "body",
                message: "Masukkan Text"
            }
        ]
    )
        .then((answwer) => {
            // memanggil variabel note_create di notes_controller.js
            note_create(user_id, answwer.title, answwer.body);

        }).catch((err) => {
            console.error(err);
        });
}

export default note_view;