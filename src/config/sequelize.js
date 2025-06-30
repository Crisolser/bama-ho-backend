import { Sequelize } from "sequelize";
import dotenv from "dotenv";
dotenv.config();

const { DBHOST, DBPORT, DATABASE, DBUSER, DBPASSWORD } = process.env;

const sequelize = new Sequelize(DATABASE, DBUSER, DBPASSWORD, {
    host: DBHOST,
    port: DBPORT,
    dialect: "mysql",
    logging: false,
});

export default sequelize;