import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DBHOST, DBPORT, DATABASE, DBUSER, DBPASSWORD } = process.env;

const sequelize = new Sequelize(DATABASE, DBUSER, DBPASSWORD, {
    host: DBHOST,
    port: DBPORT,
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false // ⚠️ solo si no tienes certificado verificado
        }
    },
    pool: {
        max: 15,
        min: 5,
        acquire: 30000,
        idle: 10000,
    },
    logging: false,
});

export default sequelize;