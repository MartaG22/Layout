class Calculator {
        constructor(operand1Element, operand2Element) {
                this.operand1Element = operand1Element;
                this.operand2Element = operand2Element;
                this.currentOperation = "";
                this.clear();
        };

        clear() {
                this.operand1 = 0;
                this.operand2 = 0;
                this.operator = "";
                this.currentOperation = "";
                console.log("CLEAR  operand1:", this.operand1,"operand2:", this.operand2, "currentOP:", this.currentOperation)
                this.updateScreen();
        };

        updateScreen() {
                // if (this.operand2 !== 0) {
                //         console.log("operand2:", this.operand2, "currentOP:", this.currentOperation);
                //         this.operand2Element.innerHTML = this.operand2;
                        
                // };
                console.log("UPDATESCREEN  operand1:", this.operand1,"operand2:", this.operand2, "currentOP:", this.currentOperation);
                if (this.currentOperation == "") {
                        this.operand2Element.innerHTML = this.operand2;
   
                } else {
                        // this.operand2Element.innerHTML = this.operand2;
                        this.operand2Element.innerHTML = this.currentOperation;
                };
                // this.operand2 = 0;
        };

        appendNumber(number) {
                console.log(typeof(this.operand2));
                console.log(number);

                if (number === "." && this.operand2 === 0) this.operand2 = this.operand2 + number;
                console.log(this.operand2);
                if (number === "." && this.operand2.includes(".")) return;
                
                this.operand2 = (number !== "." && this.operand2 == "0") ? number: this.operand2 + number;
               
                if (this.currentOperation !== "" && number !== ".") {
                        // Si hay una operación pendiente, reiniciar operand2
                        console.log("DENTRO DEL IF")
                        console.log("this.currentOperation:", this.currentOperation, "number", number, "this.operand2", this.operand2)
                        this.operand2 = number;
                } else {
                        // Agregar el número al final de operand2
                        this.operand2 = (number === "." || isNaN(this.operand2)) ? this.operand2 + number : number;
                }


                // console.log(this.operand2);
                // this.currentOperation = this.operand2;
                console.log("currentoperation !!!!", this.currentOperation);

                let lastCharacter = this.currentOperation.charAt(this.currentOperation.length - 1);
                console.log("ultimoCaracter", lastCharacter);
                console.log("this.currentOperatio", this.currentOperation,)

                if (!isNaN(lastCharacter)) {
                        console.log("Es un numero");
                        this.currentOperation = this.operand2;
                        // this.operand2 = 0;

                } else {
                        console.log("NO es un numero")
                        console.log(this.operand2);
                        this.currentOperation += this.operand2;

                }

                this.updateScreen();


               
                


        };

        operation(operator) {

                let lastCharacter = this.currentOperation.charAt(this.currentOperation.length - 1);
                console.log("ultimoCaracter", lastCharacter);
                if (!isNaN(lastCharacter)) {
                        console.log("Es un numero");

                        this.operator = operator;
                        this.currentOperation = this.currentOperation + this.operator;

                } else {
                        console.log("NO es un numero")
                        this.currentOperation = this.currentOperation.slice(0, -1);
                        this.operator = operator;
                        this.currentOperation = this.currentOperation + this.operator;
                };

                

                        // console.log("this.operator", this.operator);
                        // console.log("operator", operator)
                        // this.currentOperation = this.currentOperation + this.operator;
                        this.updateScreen();

                
                // thispm run devoperator = "";

        };

};

export default Calculator;


function realizarSolicitud(expresion, apiUrl) {
        console.log("Llamada a realizarSolicitud con expresion:", expresion, "y apiUrl:", apiUrl);
        fetch(apiUrl, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ expresion }),
        })
                //     .then((respuesta) => respuesta.json())
                .then((respuesta) => {
                        console.log("respuesta", respuesta)
                        if (!respuesta.ok) {
                                throw new Error(`Error en la solicitud: ${respuesta.status}`);
                        }
                        return respuesta.json();
                })
                .then((datos) => {
                        console.log("dentro del fetch")
                        console.log(datos);
                        // Llama al callback con los datos recibidos
                        // callback(datos);
                        // elementoResultado.textContent = datos.resultado;
                })
                .catch((error) => {
                        console.error("Error:", error);
                });
};
