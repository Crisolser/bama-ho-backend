import sequelize from "./sequelize";
import Admin from "../models/admin.model";
import AdminPermission from "../models/admin.permission.model";
import AdminRole from "../models/admin.role.model";
import Permission from "../models/permission.model";
import Role from "../models/role.model";
import RolePermission from "../models/role.permission.model";

const syncDatabase = async () => {
  try {
    // Sync models with the database
    await sequelize.sync({ force: false });
    console.log("Database synchronized successfully.");
    await sequelize.authenticate();
    console.log("Database connection established successfully.");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
}

export default syncDatabase;

