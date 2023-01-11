# NodeJS-3_Relasi_SQL_Database

Relasi dalam SQL (Structured Query Language) adalah cara untuk mengaitkan data dari beberapa tabel yang berbeda dalam database. Ada beberapa jenis relasi yang dapat digunakan dalam SQL, diantaranya adalah:

* One-to-One (1:1)
* One-to-Many (1:N)
* Many-to-Many (M:N)

Relasi One-to-One (1:1) adalah relasi antara dua tabel dimana satu baris dari tabel A hanya dapat digabungkan dengan satu baris dari tabel B, dan sebaliknya.

Relasi One-to-Many (1:N) adalah relasi antara dua tabel dimana satu baris dari tabel A dapat digabungkan dengan banyak baris dari tabel B, tetapi satu baris dari tabel B hanya dapat digabungkan dengan satu baris dari tabel A.

Relasi Many-to-Many (M:N) adalah relasi antara dua tabel dimana banyak baris dari tabel A dapat digabungkan dengan banyak baris dari tabel B, dan sebaliknya.

Dalam Node.js, Anda dapat menggunakan library ORM (Object-Relational Mapping) seperti Sequelize, TypeORM atau Objection.js untuk melakukan manipulasi data dengan relasi dalam database SQL. Library-library ini membuat Anda dapat menggunakan objek JavaScript untuk mengakses data dari tabel dalam database sehingga Anda tidak perlu menulis perintah SQL secara langsung.

Sequelize misalnya, mendukung relasi antar tabel seperti One-to-One, One-to-Many, dan Many-to-Many. Sebelum membuat relasi, Anda harus define tabel terlebih dahulu dalam model. Kemudian Anda dapat menambahkan relasi pada model tabel yang diinginkan. Contoh :

    const User = sequelize.define('user', {
      name: Sequelize.STRING
    });

    const Project = sequelize.define('project', {
      name: Sequelize.STRING
    });

    User.hasMany(Project, { foreignKey: 'userId' });
    Project.belongsTo(User, { foreignKey: 'userId' });

Ini adalah contoh sederhana mengenai relasi One-to-Many antara tabel User dan Project, dimana satu user dapat memiliki banyak project. Demikianlah pengertian relasi dalam SQL dan cara menggunakannya dalam Node.js. Anda dapat mengeksplore dokumentasi dari library ORM yang Anda pilih untuk mempelajari fitur relasi lebih lanjut.
