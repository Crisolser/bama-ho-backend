import Admin from "./admin.model.js";
import Role from "./role.model.js";
import Permission from "./permission.model.js";
import AdminRole from "./admin.role.model.js";
import AdminPermission from "./admin.permission.model.js";
import RolePermission from "./role.permission.model.js";

Admin.belongsToMany(Role, {
  through: AdminRole,
  foreignKey: 'admin_id',
  otherKey: 'role_id',
  as: 'roles'
});

Admin.belongsToMany(Permission, {
  through: AdminPermission,
  foreignKey: 'admin_id',
  otherKey: 'permission_id',
  as: 'permissions'
});

Role.belongsToMany(Permission, {
  through: RolePermission,
  foreignKey: 'role_id',
  otherKey: 'permission_id',
  as: 'permissions'
});

Role.hasMany(RolePermission, {
  foreignKey: 'role_id',
  as: 'rolePermissions'
});

Permission.hasMany(RolePermission, {
  foreignKey: 'permission_id',
  as: 'rolePermissions'
});

AdminRole.belongsTo(Role, {
  foreignKey: 'role_id',
  as: 'roleRef'
});

AdminRole.belongsTo(Admin, {
  foreignKey: 'admin_id',
  as: 'adminRef'
});

AdminPermission.belongsTo(Admin, {
  foreignKey: 'admin_id',
  as: 'adminRef'
});

AdminPermission.belongsTo(Permission, {
  foreignKey: 'permission_id',
  as: 'permissionRef'
});

RolePermission.belongsTo(Role, {
  foreignKey: 'role_id',
  as: 'roleRef'
});

RolePermission.belongsTo(Permission, {
  foreignKey: 'permission_id',
  as: 'permissionRef'
});

export default {
  Admin,
  Role,
  Permission,
  AdminRole,
  AdminPermission,
  RolePermission
};