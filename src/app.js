const express = require('express');
const app = express();

const mode = process.env.MODE || "dev";
if mode == 'dev' {
    const dotenv = require('dotenv').config();
}

const port = process.env.PORT || 3500;

app.use('/',
    (req, res) => {
        res.status(401).send({
            'err': 'error de ruta, trata de nuevo. la ruta de la api esta en /api/'
        })
    }
)

app.listen(port, '0.0.0.0', () => {
    console.log(`Servidor corriendo en el puerto ${port}`);
});