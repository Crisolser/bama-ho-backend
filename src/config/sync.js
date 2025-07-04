import sequelize from "./sequelize.js";
import Admin from "../models/admin.model.js";
import AdminPermission from "../models/admin.permission.model.js";
import AdminRole from "../models/admin.role.model.js";
import Permission from "../models/permission.model.js";
import Role from "../models/role.model.js";
import RolePermission from "../models/role.permission.model.js";
import createInitialData from "./seeders/initial.data.js";

const syncDatabase = async () => {
  try {
    // Sync models with the database
    await sequelize.sync({ force: true });
    console.log("Database synchronized successfully.");
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
    await createInitialData();
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
}

export default syncDatabase;

