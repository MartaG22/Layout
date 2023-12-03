const express = require ("express");
const bodyParser = require ("body-parser");
const cors = require("cors");

const app = express();
const port = 3030;
const routes = require("../SERVER/routes/index_routes.js");

// app.use(cors());  
app.use(cors({          // Agrega el middleware cors
        origin: 'http://localhost:3000',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true,
        optionsSuccessStatus: 204,
    }));

app.use(bodyParser.json());


app.post("/calculate", (req, res) => {
        console.log("recibido en app back", req.body)
        const expression = req.body;
        let result;
    
        try {
            result = eval(expression);
            console.log("resusltat", result)
            res.json({ result });
        } catch (error) {
            console.error("Error al evaluar la expresión:", error);
            res.status(500).json({ error: "Error al evaluar la expresión" });
        }
});



app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`)
})