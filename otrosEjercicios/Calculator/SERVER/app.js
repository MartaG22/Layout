const express = require ("express");
const bodyParser = require ("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/calculate", (req, res) => {
        const expression = req.body.expression;

        // const result = eval(expression);
        // res.json()
});

app.listen(port, () => {
        console.log("Servidor escuchando en http://localhost:${port}")
})