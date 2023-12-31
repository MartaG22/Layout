const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3030;
const routes = require("../SERVER/routes/index_routes.js"); //! ????
const parseExpresion = require("./helpers/parseExpression.js");
const solveSequence = require("./helpers/solveSequence.js");

// app.use(cors());
app.use(
        cors({
                // Agrega el middleware cors
                origin: "http://localhost:3000",
                methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
                credentials: true,
                optionsSuccessStatus: 204,
        })
);

app.use(bodyParser.json());

app.post("/calculate", (req, res) => {
        console.log("recibido en app back", req.body);
        const expression = req.body.expression;
        console.log("expression", expression);
        console.log("type of expression", typeof expression);

        function calculateParenthesis(expressionWithoutParenthesis) {
                console.log("expresionSinParenhtesis en FUNCION calculateParenthesis", expressionWithoutParenthesis);
                const newSequence = parseExpresion(expressionWithoutParenthesis);
                const solveNewSequence = solveSequence(newSequence);
                console.log(
                        "solveNewSequence en CALCULATEpARENTEISS:",
                        solveNewSequence
                );
                return solveNewSequence;
                // console.log("partialResult:", partialResult)
        }

        // function calculateExpressionWithParenthesis(sequence) {
        //         while (sequence.includes('(')) {
        //                 sequence = sequence.replace(/\([^()]+\)/g, match => {
        //                         const expressionWithoutParenthesis = match.slice(1, -1);
        //                         console.log("expresión sin paréntesis --- expressionWithoutParenthesis:", expressionWithoutParenthesis);
        //                         const resultParentesis = calculateParenthesis(expressionWithoutParenthesis);
        //                         console.log("resultParentesis:", resultParentesis)
        //                 });
        //         }
        //         console.log("***sequence en la funcion calculateExpressionWithParenthesis", sequence)
        //         return sequence;
        // };

        function calculateExpressionWithParenthesis(sequence) {
                while (sequence.includes("(")) {
                        sequence = sequence.replace(/\([^()]+\)/g, (match) => {
                                const expressionWithoutParenthesis = match.slice(1, -1);
                                console.log(
                                        "expresión sin paréntesis --- expressionWithoutParenthesis:",
                                        expressionWithoutParenthesis
                                );

                                // Verifica si expressionWithoutParenthesis es válida antes de llamar a calculateParenthesis
                                if (expressionWithoutParenthesis.trim() !== "") {
                                        const resultParentesis = calculateParenthesis(
                                                expressionWithoutParenthesis
                                        );
                                        console.log("resultParentesis:", resultParentesis);
                                        return resultParentesis !== undefined
                                                ? resultParentesis
                                                : match; // Devuelve el resultado de calculateParenthesis o la cadena original si es undefined
                                } else {
                                        console.error("Expresión dentro de paréntesis inválida.");
                                        return match; // Devuelve la cadena original si la expresión dentro de paréntesis es inválida
                                }
                        });
                }
                return sequence;
        };



        try {
                //     result = eval(expression);

                // secuenciaNumerica
                const numericalSequence = expression
                        .replace(/÷/g, "/")
                        .replace(/(\d+)%(\d+)/g, function (match, p1, p2) {
                                // p1 es el primer grupo de captura (\d+), p2 es el segundo grupo de captura (\d+)
                                return "(" + p1 + " / 100) * " + p2;
                        });


                // Verificar si hay paréntesis en la secuencia
                let nuevaSecuencia;
                if (numericalSequence.includes("(")) {
                        let numericalSequenceWithParenthesis = calculateExpressionWithParenthesis(numericalSequence);
                        console.log("Secuencia después de calcular paréntesis:", numericalSequenceWithParenthesis);
                        nuevaSecuencia = parseExpresion(numericalSequenceWithParenthesis);
                        console.log("secuenciaNumerica", nuevaSecuencia);
                } else {
                        nuevaSecuencia = parseExpresion(numericalSequence);
                        console.log("secuenciaNumerica", nuevaSecuencia);
                };


                try {
                        const endResult = solveSequence(nuevaSecuencia);
                        console.log("Resultado final:", endResult);
                        console.log("typeof Resultado final:", typeof endResult);
                        res.json({ result: endResult }); // Enviar respuesta como JSON

                } catch (error) {
                        console.error(error.message);
                }

                // console.log("resusltat", result)
                // res.json({ result });
                // res.json({ resultadoFinal });
        } catch (error) {
                console.error("Error al evaluar la expresión:", error);
                res.status(500).json({
                        error: "Error al evaluar la expresión",
                        details: error.message,
                });
        }
});

app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
});
