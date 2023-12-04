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
                // console.log("CLEAR  operand1:", this.operand1,"operand2:", this.operand2, "currentOP:", this.currentOperation)
                this.updateScreen();
        };

        updateScreen() {
                // if (this.operand2 !== 0) {
                //         console.log("operand2:", this.operand2, "currentOP:", this.currentOperation);
                //         this.operand2Element.innerHTML = this.operand2;
                        
                // };
                // console.log("UPDATESCREEN  operand1:", this.operand1,"operand2:", this.operand2, "currentOP:", this.currentOperation);
                if (this.currentOperation == "") {
                        this.operand2Element.innerHTML = this.operand2;
                        this.operand2 = 0;
                } else {
                        // this.operand2Element.innerHTML = this.operand2;
                        this.operand2Element.innerHTML = this.currentOperation;
                        // this.operand2 = 0;
                };
                // this.operand2 = 0;
        };

        appendNumber(number) {

                console.log("typeof operand2:", typeof(this.operand2));
                console.log("number:", number);
                console.log("this.operand2 AL INICI DE APPENDNUMBER", this.operand2)
                // if (number === "." && this.operand2.toString().includes(".")) return;
                
                if (number === "." && this.operand2 == "0") {
                        // this.operand2 = this.operand2 + number;
                
                        console.log("11111111111")
                        this.operand2 += number;
                        this.currentOperation += number;
                        // console.log("DENTRO DEL IFFFFFFFFFFFFFFFF")

                        console.log("number", number);
                        console.log("this.operand2 EN EL IF", this.operand2);
                        console.log("this.currentOperation",  this.currentOperation);
                        
                // } else if (number == "." && this.operand2 !== "0") {
                } else if (number === "." && this.operand2 !== "0" && !this.operand2.toString().includes(".")) {
                        console.log("22222222222")

                        // this.operand2 = this.operand2 + number;
                        console.log("EN EL PRIMER ELSE IF, NUMBER . Y NO O", this.operand2)
                        console.log("this.currentOperation <nfes",  this.currentOperation);
                        this.currentOperation += number;
                        // console.log("this.currentOperation despues",  this.currentOperation);
                        // console.log("this.currentOperation DESPUES DE IGUALAR CURRE...",  this.currentOperation);
                        // return;

                } else if (number !== "." && this.operand2 !== "0") {
                        console.log("33333333333")

                        this.operand2 = number;
                        this.currentOperation += this.operand2;   
                        console.log("number", number);
                        console.log("this.operand2 EN EL ELSE", this.operand2);
                        console.log("this.currentOperation",  this.currentOperation);
                };

                this.updateScreen();      

        };

        operation(operator) {

                let lastCharacter = this.currentOperation.charAt(this.currentOperation.length - 1);
                // console.log("ultimoCaracter", lastCharacter);
                if (!isNaN(lastCharacter )) {
                // if (!isNaN(lastCharacter || lastCharacter == ".")) {
                        //! console.log("Es un numero");
                        this.operator = operator;
                        this.currentOperation = this.currentOperation + this.operator;
                        
                } else {
                        //! console.log("NO es un numero")
                        this.currentOperation = this.currentOperation.slice(0, -1);
                        this.operator = operator;
                        this.currentOperation = this.currentOperation + this.operator;
                };
                
                
                        this.operand2 = 0;

                        // console.log("this.operator", this.operator);
                        // console.log("operator", operator)
                        // this.currentOperation = this.currentOperation + this.operator;
                        this.updateScreen();

                
                // thispm run devoperator = "";

        };

        equal() {
                console.log(this.currentOperation)
                return this.currentOperation;
        }
};

export default Calculator;





/*function realizarSolicitud( expresion, apiUrl) {
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
 */