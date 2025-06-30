import app from "./app.js";
import dotenv from "dotenv";
dotenv.config();

const Puerto = process.env.PORT || 4001;
const main = () => {
    app.listen(Puerto, () => {
        console.log(`Servidor corriendo en el puerto ${Puerto}`);
    });
}

main()