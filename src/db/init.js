const Database = require("./config")

const initDb = {
    async init(){
        const db = await Database()

        await db.exec(`CREAT TABLE rooms (
            id INTEGER PRIMARY KEY,
            pass TEXT
            )
        `);

        await db.exec(`CREAT TABLE questions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            titulo TEXT,
            read INT
        )`);
    }
}

initDb.init();