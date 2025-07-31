import Role from "../../models/role-model.js"
import Permission from "../../models/permission-model.js";
import Admin from "../../models/admin-model.js";

const createInitialData = async () => {
  try {
    // Crear estados de cuenta por defecto

    const newAdmin = await Admin.create({
        name:"admin",
        paternal_surname:"user",
        maternal_surname:"primal",
        email:"admin@admin.com",
        phone:"5555555555",
        password:"Test#12345",
    })

    // Crear roles por defecto
    const adminRole = await Role.create({
      name: 'Administrador',
      description: 'Rol con todos los permisos del sistema'
    });

    // Crear permisos básicos
    const permissions = await Permission.bulkCreate([
      { name: 'admins.read', description: 'Obtener lista de administradores' },
      { name: 'admins.edit', description: 'Editar información del administrador' },
      { name: 'admins.create', description: 'Crear nuevo administrador' },
      { name: 'roles.create', description: 'Crear nuevo rol' },
      { name: 'roles.edit', description: 'Editar información del rol' },
      { name: 'permissions.create', description: 'Descripción actualizada' },
      { name: 'permissions.edit', description: 'Editar información del permiso' },
      { name: 'admins.access.read', description: 'Acceder a los permisos que tiene un administrador' },
      { name: 'admins.access.edit', description: 'Agregar o remover permisos a administradores' }
    ]);


    // Asignar todos los permisos al rol de administrador
    await adminRole.setPermissions(permissions);
    //await newAdmin.setPermissions(permissions)
    await newAdmin.setRoles(adminRole)

    console.log('Datos iniciales creados exitosamente');
  } catch (error) {
    console.error('Error al crear datos iniciales:', error);
    throw error;
  }
};

export default createInitialData; 