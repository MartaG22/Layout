"use strict"
class Calculator {
        constructor(operand1Element, operand2Element) {
                this.operand1Element = operand1Element;
                this.operand2Element = operand2Element;
                this.currentOperation = "";
                this.pointEntered = false;  // Variable para rastrear si ya se ha ingresado un punto

                this.clear();
        };

        clear() {
                this.operand1 = 0;
                this.operand2 = 0;
                this.operator = "";
                this.currentOperation = "";
                this.pointEntered = false;  // Variable para rastrear si ya se ha ingresado un punto
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

                console.log("number:", number);
                console.log("this.operand2 AL INICI DE APPENDNUMBER", this.operand2);
                console.log("this.pointEntered", this.pointEntered);
                

                // if (number === "." && !this.pointEntered) {
                //         // this.pointEntered = true
                //         console.log("Hola")
                //         console.log("this.pointEntered dentro IF", this.pointEntered);
                //         return;

                // };

                if (number === "." && this.operand2 == "0") {
                        console.log("11111111111")
                        console.log("DENTRO DEL IFFFFFFFFFFFFFFFF")
                        console.log("number:", number);
                        console.log("this.currentOperation", this.currentOperation);
                        // Agrega un "0" antes del punto
                        this.operand2 = `0${number}`;
                        this.currentOperation += this.operand2;
                        this.pointEntered = true;  // Se ha ingresado un punto


                        console.log("number", number);
                        console.log("this.operand2 EN EL IF", this.operand2);
                        console.log("this.currentOperation", this.currentOperation);
                        console.log("this.pointEntered", this.pointEntered)
                // } else if (number === "."  && this.operand2 == "0"){
                //         console.log("hola funciona")
                //         console.log("this.operand2 cuando number es 0 y this.operand2 = 0", this.operand2);

                // } else if (number == "0" && this.operand2 == "0") {
                //         console.log("numer 0 y this.operadn2 = 0")
                //         console.log("number:", number);

                } else if (number !== "." && number !== "0" && this.operand2 == "0") {

                        console.log("number:", number);
                        console.log("thi.oper2 dentro del segundo iF", this.operand2);
                        this.operand2 = number;
                        // this.operand2 = `0${number}`;
                        console.log("después de igaualar a numbber IF2", this.operand2)
                        this.currentOperation += this.operand2;
                                
                // } else if ((!isNaN(number) && this.operand2 !== "0")) {
                } else if (number !== "." && number !== "0" && this.operand2 !== "0") {
                        console.log("number:", number);
                        console.log ("this,ioer2 entro del tercer IF", this.operand2);

                        this.operand2 += number;
                        console.log("despues igualar IF3", this.operand2)
                        this.currentOperation += number;

                } else if (number == "." && this.operand2 !== "0" && !this.pointEntered) {
                        console.log("number:", number);
                        console.log ("this,ioer2 entro del cuarto IF", this.operand2);
                        this.operand2 += number;
                        this.currentOperation += number;
                        this.pointEntered = true;
                // } else if (){
                } else {
                        console.log("HOLAAAAAAAAA")
                        this.operand2 += number;
                        this.currentOperation += number;
                };



                // };

                // //! HAY QUE MANEJAR LA OPCIÓN DE INTRODUCIR CERO Y QUE PONGA EL PUNTO
                // if (number === "." && this.operand2 == "0") {
                //         console.log(" ******** IF 1")
                //         // Agrega un "0" antes del punto
                //         this.operand2 = `0${number}`;
                //         this.currentOperation += this.operand2;
                //         this.pointEntered = true;  // Se ha ingresado un punto
                // };

// TODO [x] Cuando introduzco 0 y luego "." ==> me pone "00."
// TODO [x] Manejar el añadir la segunda cifra después del signo, que no concatene. Ahora borra la pantalla
// TODO [] ver como manejar si el primer botón pulsado es algun no admitido, ejem (+, -, /, *)


                this.updateScreen();

        };


        eraseNumber() {
                // console.log(this.operand2)
                if (this.operand2 === 0) return;
                this.operand2 = this.operand2.slice(0, -1);
                this.currentOperation = this.currentOperation.slice(0, -1);
                if (this.operand2.length === 0) this.operand2 = 0;
                this.updateScreen();
        };


        operation(operator) {

                let lastCharacter = this.currentOperation.charAt(this.currentOperation.length - 1);
                // console.log("ultimoCaracter", lastCharacter);
                if (!isNaN(lastCharacter)) {
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
                this.pointEntered = false;

                // console.log("this.operator", this.operator);
                // console.log("operator", operator)
                // this.currentOperation = this.currentOperation + this.operator;
                this.updateScreen();
        };

        equal() {
                console.log(this.currentOperation)
                this.operand2Element.innerHTML = this.currentOperation;
                this.operand1Element.innerHTML = `${this.currentOperation} =`;

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

