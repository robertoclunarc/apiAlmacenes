import express from "express";
import morgan from "morgan";
import cors from "cors";

//rutas
import adm_almacenes from "./routes/adm_almacenes"

//Inicialitizations 
const app =  express();
app.set("port", process.env.PORT || 3004);

//middleeares
app.use(morgan("dev"));
//app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());

/* app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');

    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();

    app.options('*', (req, res) => {
        res.header('Access-Control-Allow-Methods', 'GET, PATCH, PUT, POST, DELETE, OPTIONS');
        res.send();
    });
}); */

//rutas

app.use(adm_almacenes);


app.get("/", (req, resp) => {
    resp.send("Server http ON!");
});

app.listen(app.get("port"));
console.log("Server express on port:", app.get("port"));