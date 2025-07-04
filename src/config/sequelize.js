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
    logging: false,
});

export default sequelize;