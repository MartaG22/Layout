const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3030;
const routes = require("../SERVER/routes/index_routes.js");   //! ????
const parseExpresion = require("./helpers/parseExpression.js");
const solveSequence = require("./helpers/solveSequence.js");


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
        const expression = req.body.expression;
        console.log("expression", expression)
        console.log("type of expression", typeof (expression))


        try {
                //     result = eval(expression);

                const secuenciaNumerica = parseExpresion(expression);
                console.log("secuenciaNumerica", secuenciaNumerica);


                try {
                        const endResult = solveSequence(secuenciaNumerica);
                        console.log("Resultado final:", endResult);
                        console.log("typeof Resultado final:", typeof(endResult));

                        //! NO ESTOY SEGURA DE PASAR UN JSON
                        // let result = endResult
                        res.json({ result: endResult });  // Enviar respuesta como JSON
                } catch (error) {
                        console.error(error.message);
                }


                // console.log("resusltat", result)
                // res.json({ result });
                // res.json({ resultadoFinal });
        } catch (error) {
                console.error("Error al evaluar la expresión:", error);
                res.status(500).json({ error: "Error al evaluar la expresión", details: error.message });
        }
});



app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`)
})