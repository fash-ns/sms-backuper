import {Sequelize} from "sequelize";

class SequelizeSingleton {
    private static instance: Sequelize | null = null;

    public static getInstance(): Sequelize {
        if (!SequelizeSingleton.instance) {
            SequelizeSingleton.instance = new Sequelize({
                host: process.env.MYSQL_HOST,
                username: process.env.MYSQL_USER,
                password: process.env.MYSQL_PASSWORD,
                database: process.env.MYSQL_DATABASE,
                dialect: "mysql",
                logging: false
            });
        }
        return SequelizeSingleton.instance;
    }
}

export default SequelizeSingleton;