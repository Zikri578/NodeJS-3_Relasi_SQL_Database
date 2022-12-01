import conn from "../prisma/connection.js";

/**
 * Function add note untuk database yang dibutuhkan user id
 * @param {number} user_id 
 * @param {string} title 
 * @param {string} body 
 */

// membuat variabel note_create yang dimana isi dari note itu berupa user_id, title, dan body
const note_create = async (user_id, title, body) => {

    // membuat variabel addNote untuk membuat note baru
    const addNote = await conn.notes.create(
        {
            data: {
                user_id: parseInt(user_id),
                title: title,
                body: body
            }
        }
    );

    // jika gagal memasukkan data
    if (!addNote) {
        return (
            console.error("Terjadi Kesalahan Data!")
        )
    }

    console.clear();
    console.log(`

                Data Berhasil Dimasukkan
        ========================================
        title   : ${addNote.title}
        body    : ${addNote.body}
        ========================================
    `);
}

export default note_create;

