import { PrismaClient } from "@prisma/client";

// membuat variabel connection untuk menghubungkan ke prisma studio
const conn = new PrismaClient();

// memanggil variabel conn
export default conn;

