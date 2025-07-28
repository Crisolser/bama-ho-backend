import sequelize from "./sequelize.js";
import "../models/index.js";
import "../models/associations/index.js";
import createInitialData from "./seeders/initial.data.js";

const syncDatabase = async () => {
  try {
    // Sync models with the database
    await sequelize.sync({ alert: true });
    console.log("Database synchronized successfully.");
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
    //await createInitialData();
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
}

export default syncDatabase;

