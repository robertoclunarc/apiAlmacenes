import express from "express";
import morgan from "morgan";
import cors from "cors";
import db from "./database";


//rutas
import adm_almacenes from "./routes/adm_almacenes"

//Inicialitizations 
const app = express();
app.set("port", process.env.PORT || 3004);

//middleeares
app.use(morgan("dev"));
//app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
db.conectarBD(); // agregado para coneccion


//rutas

app.use(adm_almacenes);


app.get("/", (req, resp) => {
    resp.send("Server http ON!");
});

app.listen(app.get("port"));
console.log("Server express on port:", app.get("port"));