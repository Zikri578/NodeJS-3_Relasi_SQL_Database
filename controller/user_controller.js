import conn from "../prisma/connection.js";
import note_view from "../views/note.js";

// membuat variabel user_register username dan password
export const user_register = (username, password) => {

    // membuat user baru 
    conn.users.create(
        {
            // melakukan pemanggilan variabel name username dan password
            data: {
                username: username,
                password: password
            }
        }
    )
        // ketika sudah memasukkan username dan password maka akan menampilkan pesan
        .then((result) => {
            console.clear();
            console.log("Registration Success..");
            console.log(result);

            // ketika username tersebut sudah ada sebelumnya maka akan menampilkan pesan 
        }).catch((err) => {
            console.clear();
            console.error("Registration Failed!");
        });
}

// untuk login ketika sudah register
export const user_login = async (username, password) => {

    // membuat variabel findUser untuk mencari user unik
    const findUser = await conn.users.findUnique(
        {
            where: {
                username: username
            }
        }
    );

    // mencari user unik
    if (!findUser) {
        return (
            console.log("Username Tidak Ditemukan")
        );
    }

    // mengecek password
    if (password != findUser.password) {
        return (
            console.log("Password anda salah!!")
        );
    }

    console.log("Login Berhasil!");

    // memanggil function note_view di note.js
    note_view(findUser.id);

}