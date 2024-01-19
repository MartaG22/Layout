// class Caltulator {
//         constructor(operand1Element, operand2Element) {
//                 this.operand1Element = operand1Element;
//                 this.operand2Element = operand2Element;
//                 this.currentOperation = "";
//                 this.clear();
//         };

//         clear(){
//                 this.operand1 = 0;
//                 this.operand2 = 0;
//                 this.operator = "";    
//                 this.currentOperation = "";
//                 this.updateScreen();
//         };

//         updateScreen() {
//                 this.operand1Element.innerHTML = this.operand1 + this.operator;
//                 // this.operand1Element.innerHTML = this.currentOperation;
//                 this.operand2Element.innerHTML = this.operand2;
//                 console.log(this.operand1, this.operand2)
//         };

//         appendNumber(number) {

//                 // this.operand2 = this.operand2;
//                 if (number === "." && this.operand2.includes(".")) return;
//                 if (number === "." && this.operand2 === 0) this.operand2 = this.operand2 + number;
//                 this.operand2 = number !== "." && this.operand2 == "0" ? number: this.operand2 + number;
//                 console.log("en appendNumber", this.operand2)
//                 console.log("en appendNumber", typeof(this.operand2))
//                 // this.currentOperation = this.currentOperation + this.operand2;
//                 // console.log("currentoperation", this.currentOperation)
//                 this.updateScreen();
//         };

//         eraseNumber() {
//                 if (this.operand2 === 0) return;
//                 this.operand2 = this.operand2.slice(0, -1);
//                 if (this.operand2.length === 0) this.operand2 = 0;
//                 this.updateScreen();
//         };

//         operation(operator){
//                 if(this.operator) {
//                         this.calculate();
//                 };
//                 this.operator = operator;

//                 this.operand1 = parseFloat(this.operand2) === 0 ? this.operand1 : this.operand2;
//                 if (this.currentOperation === "") {
//                         console.log("UNO")
//                         this.currentOperation = `${this.operand1} ${operator}`;
//                         console.log("aquiii", this.currentOperation)

//                 } else {
//                         console.log(typeof(this.currentOperation))
//                         console.log(this.operand1, this.operand2)
//                         this.currentOperation = this.currentOperation + this.operator;
//                         console.log("aquiii abajo", this.currentOperation)

//                 }

//                 this.operand2 = 0;
//                 this.updateScreen();
//         };

//         calculate() {
//                 switch(this.operator) {
//                         case "+":
//                                 // console.log(this.operand1, this.operand2)
//                                 this.operand1 = parseFloat(this.operand1) + parseFloat(this.operand2);
//                                 break;
//                         case "-":
//                                 this.operand1 = parseFloat(this.operand1) - parseFloat(this.operand2);
//                                 break;
//                         case "*":
//                                 this.operand1 = parseFloat(this.operand1) * parseFloat(this.operand2);
//                                 break;
//                         case '\u00F7':
//                         // case "÷":
//                                 this.operand1 = parseFloat(this.operand1) / parseFloat(this.operand2);
//                         break;
//                 };
//                 this.operator = "";
//                 this.operand2 = 0;
//                 this.updateScreen();
//         };

//         percentage() {
//                 console.log(this.operand1, this.operand2)

//                 this.operand1 = parseFloat(this.operand2) * 100;
//                 console.log(this.operand1, this.operand2)
//                 // console.log(this.operand1)

//         }


// };



import Calculator from './calculator.js';

const operand1Element = document.querySelector("[data-screen-operand]");
const operand2Element = document.querySelector("[data-screen-result]");
const clearButton = document.querySelector("[data-clear]");
const numberButtons = document.querySelectorAll("[data-number]");
const eraseNumber = document.getElementById("erase");
const operationButtons = document.querySelectorAll("[data-operation]");
const percentageButton = document.getElementById("percentage");
const equalButton = document.getElementById("equal");
const piButton = document.getElementById("pi");
const eButton = document.getElementById("numberE");
const apiUrl = 'http://localhost:3030';

// console.log("operand2Element en MAIN***********", operand2Element)

const calculator = new Calculator(operand1Element, operand2Element);


clearButton.addEventListener("click", () => {
        calculator.clear();
});

numberButtons.forEach(button => {
        button.addEventListener("click", () => {
                console.log("Button:", button);
                // console.log("Before appendNumber:", this.operand2);
                calculator.appendNumber(button.innerHTML);
        });
});

eraseNumber.addEventListener("click", () => {
        // console.log("eraseNumber.addEvent");
        calculator.eraseNumber();
});


operationButtons.forEach(button => {
        button.addEventListener("click", () => {
                calculator.operation(button.innerHTML);
        });
});


piButton.addEventListener("click", () => {
        // console.log("piBUTTON");
        const pi = 3.1415926536;
        calculator.appendNumber(pi);

});

eButton.addEventListener("click", () => {
        // console.log("e  BUTTON");
        const numberE = 2.71828182846;
        calculator.appendNumber(numberE);

});

initialParenthesis.addEventListener("click", () => {
        // console.log("PARENTESIS")
        calculator.addParenthesis();
});

endParenthesis.addEventListener("click", () => {
        calculator.endParenthesis();
})


equalButton.addEventListener("click", async () => {
        let operation = calculator.equal();
        console.log(operation)
        // console.log(this.currentOperation)
        // let expresion = calculator.calculate();
        // console.log("EXPRESION:", expresion)
        // let expresion = 2 + 2;
        console.log(apiUrl); // Añade este console.log para verificar la URL
        // realizarSolicitud(expresion, apiUrl)
        // realizarSolicitud(expresion, "http://localhost:3030/calculate");
        try {
                let result = await makeRequest(operation, `${apiUrl}/calculate`);
                console.log("result en EQUALBUTTON EN MAIN", result)
                if (result === undefined)  result = "0";
                

                calculator.equal(result);
        } catch (error) {
                // Maneja el error si es necesario
                console.error("Error al realizar la solicitud:", error);
        };
})

percentageButton.addEventListener("click", () => {
        console.log("PERCENTATGE!!!!");
        calculator.percentage();
})




//! Función para realizar una solicitud fetch al backend

// function realizarSolicitud(expresion, apiUrl, callback) {
//? ESTA FUNCIÓN ESTÁ HECHA CON PROMESAS!!!
// function realizarSolicitud(expresion, apiUrl) {
//         console.log("Llamada a realizarSolicitud con expresion:", expresion, "y apiUrl:", apiUrl);
//         fetch(apiUrl, {
//                 method: "POST",
//                 headers: { "Content-Type": "application/json" },
//                 body: JSON.stringify({ expresion }),
//         })
//                 //     .then((respuesta) => respuesta.json())
//                 .then((respuesta) => {
//                         console.log("respuesta", respuesta)
//                         if (!respuesta.ok) {
//                                 throw new Error(`Error en la solicitud: ${respuesta.status}`);
//                         }
//                         return respuesta.json();
//                 })
//                 .then((datos) => {
//                         console.log("dentro del fetch")
//                         console.log(datos);
//                         // Llama al callback con los datos recibidos
//                         // callback(datos);
//                         // elementoResultado.textContent = datos.resultado;
//                 })
//                 .catch((error) => {
//                         console.error("Error:", error);
//                 });
// };


//? ESTA FUNCIÓN ESTÁ HECHA CON FUNCIÓN ASÍNCRONA!!!

async function makeRequest(expression, apiUrl) {
        try {
                console.log("Llamada a makeRequest con expresion:", expression, "y apiUrl:", apiUrl);
                const respuesta = await fetch(apiUrl, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify({ expression }),
                });

                if (!respuesta.ok) {
                        throw new Error(`Error en la solicitud: ${respuesta.status}`);
                }

                const datos = await respuesta.json();
                console.log("dentro del fetch");
                console.log(datos);
                console.log("type datos:", typeof (datos));


                // Convertir datos a cadena JSON
                const datosJSONString = JSON.stringify(datos.result);
                console.log(datosJSONString);
                console.log("type datosJSONString:", typeof (datosJSONString));

                if (datosJSONString) {
                        return datosJSONString;
                }
                // Puedes realizar acciones adicionales con los datos recibidos

        } catch (error) {
                console.error("Error:", error);
        }
};




