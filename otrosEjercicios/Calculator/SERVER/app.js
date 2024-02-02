const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const port = 3030;
const routes = require("../SERVER/routes/index_routes.js"); //! ????
const parseExpresion = require("./helpers/parseExpression.js");
const solveSequence = require("./helpers/solveSequence.js");

const readFile = require("./helpers/readFile.js");
const writeFile = require("./helpers/writeFile.js");
const dataFile = "./models/numbersMemory.json";


// app.use(cors());
app.use(
        cors({
                // Agrega el middleware cors
                origin: "http://localhost:3000",
                methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
                credentials: true,
                optionsSuccessStatus: 204,
                allowedHeaders: ['Content-Type', 'Otra-Cabecera-Custom'],
        })
);
// app.use(cors({ origin: '*' }));
app.use(bodyParser.json());



// !  PASAR ESTAs FUNCIÓNes A HELPERS 
function addMultiplicationSequence(expression) {
        // ? FUNCIÓN PARA AGREGAR EL SÍMBOLO "*" CUANDO SE OBVIA ANTES O ENTRE PARÉNTESIS
        // Iterar a través de la secuencia
        let newCipher = "";
        for (let i = 0; i < expression.length; i++) {
            // Agregar cada carácter a la nueva secuencia
            newCipher += expression[i];
    
            // Verificar si el carácter actual es un número y el siguiente es "("
            if (!isNaN(expression[i]) && expression[i + 1] === '(') {
                // Agregar "*" entre el número y "("
                newCipher += '*';
            };

            if (expression[i] === ')' && expression[i + 1] === '(') {
                newCipher += '*';
            };

            if (expression[i] === ')' && !isNaN(expression[i + 1]) ){
                newCipher += "*";
            };
        };
        return newCipher;
};


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
};



function calculateExpressionWithParenthesis(sequence) {
        // console.log("sequence en calculateExpressionWithParenthesis", sequence)
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
                        };
                });
        };
        return sequence;
};



app.post("/calculate", (req, res) => {
        console.log("recibido en app back", req.body);
        const expression = req.body.expression;
        console.log("expression", expression);
        console.log("type of expression", typeof expression);

        let checkedSequence = addMultiplicationSequence(expression);
        console.log("checkSequence", checkedSequence)

        

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





        try {
                //     result = eval(expression);

                // secuenciaNumerica
                const numericalSequence = checkedSequence
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
                        console.log("typeof", typeof(numericalSequenceWithParenthesis))
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


app.post("/addMemory", async (req, res) => {
        console.log("recibido en app back en addMemory", req.body);
        // const sequence = req.body.expression.sequence;
        // const result = req.body.expression.currentOperation;
        // console.log("sequence:", sequence);
        // console.log("result:", result);

        try {
                const readData = await readFile(dataFile);
                memoryData = JSON.parse(readData);
                console.log("memoryData", memoryData)

                if (req.body) {
                        let newData = {
                                resultOperation: memoryData.resultOperation + parseFloat(req.body.currentOperation),
                                operationsSequence: req.body.sequence,
                        };
                        writeFile(dataFile, newData);
                };

                res.status(200).json({ success: true, message: "Operación realizada con éxito" });
                return;

        } catch (error) {
                console.error("Error al evaluar la expresión:", error);
                res.status(500).json({
                        success: false,
                        error: "Error al evaluar la expresión",
                        details: error.message,
                });
        };
});



// app.get("/rescueMemory", async (req, res) => {
//         // console.log("recibido en app back en addMemory", req.body);
//         // const sequence = req.body.expression.sequence;
//         // const result = req.body.expression.currentOperation;
//         // console.log("sequence:", sequence);
//         // console.log("result:", result);

//         try {
//                 const readData = await readFile(dataFile);
//                 const memoryData = JSON.parse(readData);
//                 console.log("readData.resultOperation RECUPERANDO DATOS GRABADOS", readData);
//                 console.log("memoryData RECUPERANDO DATOS GRABADOS", memoryData)
//                 console.log("memoryData lo que necesito RECUPERANDO DATOS GRABADOS", memoryData.resultOperation);

//                 // if (req.body) {
//                 //         let newData = {
//                 //                 resultOperation: memoryData.resultOperation + parseFloat(req.body.currentOperation),
//                 //                 operationsSequence: req.body.sequence,
//                 //         };
//                 //         writeFile(dataFile, newData);
//                 // };
//                 // const dataObject = JSON.parse(dataString);
//                 res.status(200).json({ success: true, readData, message: "Operación realizada con éxito" });
//                 // return readData;

//         } catch (error) {
//                 console.error("Error al evaluar la expresión:", error);
//                 res.status(500).json({
//                         success: false,
//                         error: "Error al evaluar la expresión",
//                         details: error.message,
//                 });
//         };
// });





app.get("/rescueMemory", async (req, res) => {
        try {
            const readData = await readFile(dataFile);
    
            // Punto 1: Verifica si readData contiene lo esperado
            console.log("readData RECUPERANDO DATOS GRABADOS", readData);
    
            // Punto 2: Asegúrate de que readData se esté parseando correctamente
            const memoryData = JSON.parse(readData);
            console.log("memoryData RECUPERANDO DATOS GRABADOS", memoryData);
    
            // Punto 3: Asegúrate de que memoryData.resultOperation esté presente
            console.log("memoryData lo que necesito RECUPERANDO DATOS GRABADOS", memoryData.resultOperation);
    
            // Aquí puedes enviar la respuesta al cliente con success: true y la propiedad resultOperation
            res.status(200).json({ success: true, resultOperation: memoryData.resultOperation, message: "Operación realizada con éxito" });
    
        } catch (error) {
            console.error("Error al evaluar la expresión:", error);
    
            // Aquí envías una respuesta con success: false en caso de error
            res.status(500).json({
                success: false,
                error: "Error al evaluar la expresión",
                details: error.message,
            });
        }
    });
    







app.post("/resetMemory", async (req, res) => {
        console.log("recibido en app back en addMemory", req.body);
        try {
                const readData = await readFile(dataFile);
                memoryData = JSON.parse(readData);
                console.log("memoryData", memoryData)

                if (req.body) {
                        let newData = {
                                resultOperation: parseFloat(req.body.currentOperation),
                                operationsSequence: req.body.sequence,
                        };
                        writeFile(dataFile, newData);
                };

                res.status(200).json({ success: true, message: "Operación realizada con éxito" });
                return;

        } catch (error) {
                console.error("Error al evaluar la expresión:", error);
                res.status(500).json({
                        success: false,
                        error: "Error al resetear los datos en Memory",
                        details: error.message,
                });
        };

});



app.listen(port, () => {
        console.log(`Servidor escuchando en http://localhost:${port}`);
});
