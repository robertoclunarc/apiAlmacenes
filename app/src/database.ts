import mysql from "mysql2/promise";

class database {

    cnn: any;

    host: string;
    user: string;
    pass: string;
    database: string;

    constructor() {
        this.host = process.env.MYSQL_SERVER || "10.10.0.7";
        this.pass = process.env.MYSQL_SERVER || ".4C3r04dm1n";
        this.user = process.env.MYSQL_SERVER || "root";
        this.database = process.env.MYSQL_SERVER || "intranet";
    }

    async conectarBD() {
        /*    this.cnn.connect((err) => {
               if (err) throw err;
               console.log("Database is connected!");
           }); */
        //await this.cnn.query
        this.cnn = await mysql.createPool({
            host: this.host, //process.env.MYSQL_SERVER || "localhost", //"10.10.0.7",
            user: this.user, // process.env.MYSQL_USER || "root",
            password: this.pass, // process.env.MYSQL_PW || ".4C3r04dm1n", //"4c3r04dm1n",
            database: this.database, // process.env.MYSQL_DB || "intranet"
        }).getConnection();

        try {
            let testconection = await this.cnn.query(`use ${this.database};`);
            console.log(`Database ${this.database} conected!`);
        } catch (error) {
            console.log(`ERROR database conection!: ${error} `);
        }


    }

    getC() {
        return this.cnn;
    }

    private desconectarDB() {
        this.cnn.release();
    }

    async querySelect(sql: string, data?: any) {

        let result: any = null;
        if (!data) {
            result = await this.cnn.query(sql);
        } else {
            result = await this.cnn.query(sql, data);
        }
        await this.cnn.release();
        //this.cnn = null;
        this.desconectarDB();
        return result[0];
    }

    async inuup() {
        // const 
    }


}

const db = new database();
//db.conectarBD();

export default db;
