"use strict"
class Calculator {
        constructor(operand1Element, operand2Element) {
                this.operand1Element = operand1Element;
                this.operand2Element = operand2Element;
                this.currentOperation = "";
                this.pointEntered = false;  // Variable para rastrear si ya se ha ingresado un punto
                this.isEqualPressed = false;
                this.update = false;

                this.clear();
        };

        clear() {
                this.operand1 = 0;
                this.operand2 = 0;
                this.operator = "";
                this.currentOperation = "";
                this.pointEntered = false;  // Variable para rastrear si ya se ha ingresado un punto
                this.isEqualPressed = false;
                // this.update = false;



                // console.log("CLEAR  operand1:", this.operand1,"operand2:", this.operand2, "currentOP:", this.currentOperation)
                this.updateScreen();
        };


        updateScreen() {
                try {
                        // const operand2ElementScreen = document.querySelector("[data-screen-result]");
                        // console.log('operand2ElementScreen', operand2ElementScreen)
                        let lastCharacter = this.currentOperation.charAt(this.currentOperation.length - 1);

                        // Obtén el elemento por su id
                        // const operandScreenElement = (document.getElementById('operands').textContent);
                        const resultElement = (document.getElementById('result').textContent);
                        // let vuelta = false;


                        // Accede al contenido (texto) del elemento
                        // const contenido = resultElement.textContent;

                        console.log("CONTENIDO", resultElement); // Esto imprimirá "6+3-"

                        if (this.currentOperation == "") {
                                // console.log("this.operand2", this.operand2);
                                console.log(this.isEqualPressed)
                                this.operand2Element.innerHTML = this.operand2;
                                this.operand1Element.innerHTML = 0;
                                this.operand2 = 0;
                        } else {
                                // this.operand2Element.innerHTML = this.operand2;
                                console.log(this.isEqualPressed)
                                console.log("this.currentOperation en UPDATESCREEN", this.currentOperation);

                                // let lastResult = this.currentOperation.slice(0, -1);

                                // if (this.isEqualPressed) 
                                // if (this.isEqualPressed && isNaN(lastCharacter && this.update)) {      //Manejar cuando ya tengo un resultado de una operación y se contnua con otra operacion sobre el resultado dado
                                // if (this.isEqualPressed && isNaN(lastCharacter)) {      //Manejar cuando ya tengo un resultado de una operación y se contnua con otra operacion sobre el resultado dado
                                if (this.isEqualPressed && isNaN(lastCharacter)) {      //Manejar cuando ya tengo un resultado de una operación y se contnua con otra operacion sobre el resultado dado
                                        console.log("--------------<<<<<<<<-***********->>>>>>>>>>>-------------------")
                                        console.log("EN EL IF DENTRO DEL ELSE")
                                        console.log("CREO QUE NO ENTRA ENE ESTE IF")
                                        this.operand1Element.innerHTML = this.operand1;
                                        this.operand2Element.innerHTML = this.currentOperation;
                                        this.isEqualPressed = false;
                                        this.update = true;


                                        
                                } else if (this.isEqualPressed && !isNaN(lastCharacter)) {
                                        // this.operand1Element.innerHTML = this.operand1;
                                        this.operand1Element.innerHTML = this.currentOperation;
                                        this.operand2Element.innerHTML = this.operand2;
                                        this.isEqualPressed = false;
                                        this.update = true;
                                        this.currentOperation = this.operand2;

                                } else if (!isNaN(lastCharacter) && this.update) {
                                        console.log("--------------<<<<<<<<-12345678900987654321->>>>>>>>>>>-------------------")
                                        this.operand1Element.innerHTML = this.operand1;
                                        this.operand2Element.innerHTML = this.currentOperation;


                                
                                } else {
                                        this.operand2Element.innerHTML = this.currentOperation;
                                };
                        };
                        // this.operand2 = 0;
                } catch (error) {
                        console.error("Ha ocurrido un error:", error);
                }
        };


        appendNumber(number) {

                console.log("number:", number);
                console.log("this.update :", this.update );
                console.log("isNaN this.currentOperation :", isNaN(this.currentOperation) );
                console.log("this.operand2 en el primer IF, para seguir operando despues del resultado", this.operand2);
                // console.log("this.operand1 ", this.operand1);
                console.log("this.operand1 ", this.operand1);
                console.log("this.currentOperation", this.currentOperation);

                const resultElement = (document.getElementById('result').textContent);
                console.log("CONTENIDO en APPEBDNUMBER", resultElement); // Esto imprimirá "6+3-"

                try {

                // if (this.update && !isNaN(this.currentOperation)) {
                if (this.isEqualPressed && this.currentOperation == this.operand1) {
                        console.log("**************************+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++number aqqquiiiiii:", number);
                        // console.log("this.update :", this.update );
                        // console.log("isNaN this.currentOperation :", isNaN(this.currentOperation) );
                        // console.log("this.operand2 en el primer IF, para seguir operando despues del resultado", this.operand2);
                        // // console.log("this.operand1 ", this.operand1);
                        // console.log("this.operand1 ", this.operand1);
                        // console.log("this.currentOperation", this.currentOperation);
                        this.operand2 = number;
                        this.currentOperation = resultElement;

                        console.log("ESTOY EN APPENDNUMBER, this.isequalPressend true y currentopreation=operand1");
                        console.log("this.operand2 ", this.operand2);
                        console.log("this.currentOperation", this.currentOperation);
                        this.operand2 = number;
                        this.currentOperation = resultElement;
                        console.log("DESPUÉS DE IGUALAR OPREAND2 - this.operand2 ", this.operand2);
                        console.log("DESPUÉS DE IGUALAR OPREAND2 - this.currentOperation", this.currentOperation);

                        if (number === ".") {
                                console.log("AQUÍ HAY QUE SUSTITUR ALGO POR EL 0, PARA QUE SE ACTUALICE BIEN AL ELIMINAR EL ULTIMO NUMRERO")
                                this.operand2 = `0${number}`;
                                this.currentOperation = this.operand2;
                                this.pointEntered = true;  // Se ha ingresado un punto
                        };
                        
                } else {
                        

                        if (number === "." && this.operand2 == "0") {
                                // console.log("11111111111")
                                // console.log("DENTRO DEL IFFFFFFFFFFFFFFFF")
                                // console.log("number:", number);
                                // console.log("this.currentOperation", this.currentOperation);

                                // Agrega un "0" antes del punto
                                this.operand2 = `0${number}`;
                                this.currentOperation += this.operand2;
                                this.pointEntered = true;  // Se ha ingresado un punto


                                // console.log("number", number);
                                // console.log("this.operand2 EN EL IF", this.operand2);
                                // console.log("this.currentOperation", this.currentOperation);
                                // console.log("this.pointEntered", this.pointEntered)


                        } else if (number !== "." && number !== "0" && this.operand2 == "0") {

                                console.log("number:", number);
                                console.log("------thi.oper2 dentro del segundo iF", this.operand2);
                                this.operand2 = number;
                                // this.operand2 = `0${number}`;
                                console.log("después de igaualar a numbber IF2", this.operand2)
                                this.currentOperation += this.operand2;

                                // } else if ((!isNaN(number) && this.operand2 !== "0")) {
                        } else if (number !== "." && number !== "0" && this.operand2 !== "0") {
                                console.log("<<<<<<<<<<<<<<<<<<>>>>>>>>>>>  ESTE IF  <<<<<<<<<>>>>>>>>>>>>>>>>>>>>>")
                                console.log("number:", number);
                                console.log("this,ioer2 entro del tercer IF", this.operand2);

                                this.operand2 += number;
                                console.log("despues igualar IF3", this.operand2)
                                this.currentOperation += number;

                        } else if (number == "." && this.operand2 !== "0" && !this.pointEntered) {
                                console.log("number:", number);
                                console.log("this,ioer2 entro del cuarto IF", this.operand2);
                                this.operand2 += number;
                                this.currentOperation += number;
                                this.pointEntered = true;
                                // } else if (){

                                // } else if () {

                                // }

                        } else if (number !== ".") {
                                console.log("HOLAAAAAAAAA en el último ELSE IF DE APPENDNUMBER!!!!!!!!!!!!!!!")
                                //!  cREO QUE NO ENTRA EN ESTA CONDICIÓN, SE QUEDA EN LAS ANTERIORES!
                                this.operand2 += number;
                                this.currentOperation += number;
                        };

                }

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
                // TODO [x] PONE MÁS DE UN PUNTO EN EL MISMO NÚMERO
                // TODO [x] ver como manejar si el primer botón pulsado es algun no admitido, ejem (+, -, /, *)


                console.log("AL FINAL DE  APPENDNUMBER - this.operand2 ", this.operand2);
                console.log("AL FINAL DE  APPENDNUMBER - this.currentOperation", this.currentOperation);

                this.updateScreen();

                } catch (error) {
                        console.error("Ha ocurrido un error:", error);
                };
        };


        eraseNumber() {
                if (this.currentOperation.length === 0) {
                        // Si la cadena está vacía, no hay nada que borrar.
                        return;
                }

                // Elimina el último carácter de la cadena
                let lastCharacter = this.currentOperation.charAt(this.currentOperation.length - 1);
                this.currentOperation = this.currentOperation.slice(0, -1);

                if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*" || lastCharacter === "÷") {
                        // Si el último carácter era un operador, encuentra el inicio del último número.
                        let lastNumberStart = Math.max(
                                this.currentOperation.lastIndexOf("+"),
                                this.currentOperation.lastIndexOf("-"),
                                this.currentOperation.lastIndexOf("*"),
                                this.currentOperation.lastIndexOf("/")
                        ) + 1;

                        // Actualiza operand2 con el último número
                        this.operand2 = this.currentOperation.slice(lastNumberStart);
                } else {
                        // Si el último carácter no era un operador, simplemente actualiza operand2 con la cadena actual.
                        this.operand2 = this.currentOperation;
                        console.log(this.operand2);
                        this.pointEntered = this.operand2.includes(".") ? true : false;
                        console.log("this.operand2 en ERASENUMBER", this.operand2);
                        if (this.operand2 == "") {
                                console.log("AQUI HAY QUE MANDAR QUE ESCRIBA UN 0")
                                this.operand2 = 0;
                        }

                };

                console.log("this.operand2", this.operand2);
                console.log("this.currentOperation", this.currentOperation);
                this.updateScreen();
        };



        /*     eraseNumber() {
                    let lastCharacter = this.currentOperation.charAt(this.currentOperation.length - 1);
                    // Encuentra la posición del último operador:
                    let lastOperatorIndex = Math.max(
                            this.currentOperation.lastIndexOf("+"),
                            this.currentOperation.lastIndexOf("-"),
                            this.currentOperation.lastIndexOf("*"),
                            this.currentOperation.lastIndexOf("/")
                    );
    
                    console.log("this.operand2", this.operand2);
                    console.log("this.operand1", this.operand1);
                    console.log("this.currentOperation", this.currentOperation);
                    console.log("lastCharacter", lastCharacter);
                    console.log(typeof(lastCharacter));
                    // console.log("lastOperatorIndex", lastOperatorIndex)
                    // console.log()
    
                    // if (this.operand2 === 0 && this.currentOperation == "") {
                    if (this.currentOperation.length === 0) {
                            console.log("primer if")
                            return;
                    };
    
                    if (lastCharacter === "+" || lastCharacter === "-" || lastCharacter === "*" || lastCharacter === "/") {
                            console.log("AFEWFAWFAF")
                            console.log("this.currentOperation", this.currentOperation);
    
                            // Si el último carácter es un operador, elimínalo.
                            this.currentOperation = this.currentOperation.slice(0, -1);
                            // this.operand2 = this.currentOperation.slice(lastOperatorIndex + 1);
                            // console.log("this.currentOperation", this.currentOperation);
                            // console.log("this.operand2", this.operand2);
    
    
                    } else {
                            // Si el último carácter no es un operador, encuentra el inicio del último número.      
                            let lastNumberStart = Math.max(
                                    this.currentOperation.lastIndexOf("+", lastOperatorIndex),
                                    this.currentOperation.lastIndexOf("-", lastOperatorIndex),
                                    this.currentOperation.lastIndexOf("*", lastOperatorIndex),
                                    this.currentOperation.lastIndexOf("/", lastOperatorIndex)
                                ) + 1;
                        
                                // Elimina el último número y actualiza operand2
                                this.currentOperation = this.currentOperation.slice(0, lastNumberStart);
                                this.operand2 = this.currentOperation.slice(lastNumberStart);
                                console.log("this.operand2", this.operand2);
    
                                console.log("this.currentOperation", this.currentOperation);
                
                            
                    }
                    this.updateScreen();
            };
     */

        operation(operator) {

                let lastCharacter = this.currentOperation.charAt(this.currentOperation.length - 1);
                // console.log("ultimoCaracter", lastCharacter);


                // if (this.isEqualPressed) {
                //         console.log("EN EL IFF DENTRO DE OPERATION, PARA NO CAMBIAR EL OPERAND_______________");
                //         console.log(this.operator)
                //         this.currentOperation = this.currentOperation + this.operator;

                // } else {



                if (this.currentOperation == "" && (operator === "*" || operator == "/")) {
                        console.log("this.curremtOP vacía");
                        this.operator = operator;
                        this.operand2 = 0;
                        this.currentOperation = this.operand2 + this.operator;
                } else {

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

                };
                // }

                this.operand2 = 0;
                this.pointEntered = false;

                // console.log("this.operator", this.operator);
                // console.log("operator", operator)
                // this.currentOperation = this.currentOperation + this.operator;
                this.updateScreen();
        };

        equal(result) {
                // let vuelta = false;
                const resultElement = (document.getElementById('result').textContent);
                console.log("resultElement", resultElement)
                console.log("this.currentOperation en EQUAL", this.currentOperation);


                try {

                        if (result) {
                                // if (resultElement !== "0") {
                                // if ()
                                console.log("result en equal", result);
                                console.log("Typeof result en equal", typeof (result));

                                const endResult = result.toString();
                                console.log("endResult en equal", endResult);

                                // let newCurrentOperation = result;
                                // console.log("newCurrentOperation en equal", newCurrentOperation);

                                this.operand2Element.innerHTML = endResult;
                                this.operand1Element.innerHTML = `${this.currentOperation} =`;
                                this.currentOperation = result;
                                this.operand1 = result;

                        } else {

                                console.log("EN EL ELSE DE EQUAL", this.currentOperation)
                                this.operand1Element.innerHTML = `${this.currentOperation} =`;
                                this.operand2Element.innerHTML = this.currentOperation;
                        };
                } catch (error) {
                        console.error("Error:", error);

                };

                this.isEqualPressed = true;
                return this.currentOperation;
        };
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

