# Imagen base oficial de Node.js
FROM node:22-alpine

# Establecer directorio de trabajo en el contenedor
WORKDIR /app

# Copiar package.json y package-lock.json primero
COPY package*.json ./

# Instalar dependencias
RUN npm install --production

# Copiar el resto del código
COPY . .

# Exponer el puerto de la API (ajusta si es diferente)
EXPOSE 5001

# Comando para arrancar el servidor
CMD ["node", "index.js"]