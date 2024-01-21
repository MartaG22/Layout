"use strict"
class Calculator {
        constructor(operand1Element, operand2Element) {
                this.operand1Element = operand1Element;
                this.operand2Element = operand2Element;
                this.currentOperation = "";
                this.pointEntered = false;  // Variable para rastrear si ya se ha ingresado un punto
                this.isEqualPressed = false;
                this.update = false;
                this.parenthesis = false;
                this.openParenthesis = 0;
                this.closeParenthesis = 0;

                this.clear();
        };

        clear() {
                this.operand1 = 0;
                this.operand2 = 0;
                this.operator = "";
                this.currentOperation = "";
                this.pointEntered = false;
                this.isEqualPressed = false;
                this.parenthesis = false;
                this.openParenthesis = 0;
                this.closeParenthesis = 0;


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
                        // const resultElement = (document.getElementById('result').textContent);
                        // let vuelta = false;


                        // Accede al contenido (texto) del elemento
                        // const contenido = resultElement.textContent;

                        // console.log("CONTENIDO", resultElement); // Esto imprimirá "6+3-"

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
                                        // console.log("--------------<<<<<<<<-***********->>>>>>>>>>>-------------------")
                                        // console.log("EN EL IF DENTRO DEL ELSE")
                                        // console.log("CREO QUE NO ENTRA ENE ESTE IF")
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
                                        // console.log("--------------<<<<<<<<-12345678900987654321->>>>>>>>>>>-------------------")
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
                console.log("typeof NUMBER", typeof (number))
                console.log("this.update :", this.update);
                console.log("isNaN this.currentOperation :", isNaN(this.currentOperation));
                console.log("this.operand2", this.operand2);
                // console.log("this.operand1 ", this.operand1);
                console.log("this.operand1 ", this.operand1);
                console.log("this.currentOperation", this.currentOperation);

                const resultElement = (document.getElementById('result').textContent);
                console.log("CONTENIDO en APPEBDNUMBER", resultElement);

                let lastCharacter = this.currentOperation.charAt(this.currentOperation.length - 1);
                let penultimateCharacter = this.currentOperation.charAt(this.currentOperation.length - 2);
                console.log("lastCharacter en appendNumber", lastCharacter);

                try {

                        // if (this.update && !isNaN(this.currentOperation)) {
                        if (this.isEqualPressed && this.currentOperation == this.operand1) {
                                //? CUANDO TENEMOS RESULTADO DESPUÉS DE PULSAR "=" E INTRODUCIMOS OTRO NÚMERO

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
                                console.log("this.pointEntered", this.pointEntered);
                                // this.operand2 = number;
                                // this.currentOperation = resultElement;
                                console.log("DESPUÉS DE IGUALAR OPREAND2 - this.operand2 ", this.operand2);
                                console.log("DESPUÉS DE IGUALAR OPREAND2 - this.currentOperation", this.currentOperation);

                                if (number === "." && !this.pointEntered) {
                                        console.log("this.pointEntered después de dar igual, en el IF", this.pointEntered)
                                        //? SI SE INTRODUCE ".", SE ACTUALIZA COMO "0."
                                        console.log(' SI SE INTRODUCE ".", SE ACTUALIZA COMO "0."')
                                        // console.log("AQUÍ HAY QUE SUSTITUR ALGO POR EL 0, PARA QUE SE ACTUALICE BIEN AL ELIMINAR EL ULTIMO NUMRERO")

                                        // console.log("---------------------this.pointEntered-------------: ", this.pointEntered);

                                        this.operand2 = `0${number}`;
                                        this.currentOperation = this.operand2;
                                        this.pointEntered = true;  // Se ha ingresado un punto
                                        console.log("this.pointEntered después al final del  IF", this.pointEntered)
                                };

                        } else {

                                if (number == "0" && this.currentOperation == "0") return;


                                // if (number == "0" && this.operand2 == "0" && lastCharacter == "0") {
                                //         console.log("CUANDO NUMBER = 0   Y   THIS.OPERAND2 = 0");
                                //         this.operand2 = 0;
                                //         // this.currentOperation += this.operand2;
                                //         console.log("EN APPENDNUMBER PARA QUITAR EL '0000' INICIAL this.operand2", this.operand2, "this. currentoperation", this.currentOperation)

                                //         // return;
                                // };


                                if (this.parenthesis) {
                                        //! NO SÉ QUE TENGO QUE HACER AQUÍ PARA VER SI HAY MÁS DE UN PARÉNTESIS
                                        //!  podría ser hacer la diferencia entre el paréntesis abierto y el cerrado, y ese seria la cantidad que tengo que quitar aquí
                                        const withoutEndParenthesis = resultElement.slice(0, -1);
                                        console.log("withoutParenthesis", withoutEndParenthesis);
                                        this.currentOperation = withoutEndParenthesis;
                                        console.log("NUEVO EN APPENDNUMBER  this.currentOperation", this.currentOperation)

                                };


                                if (number === "." && this.operand2 == "0") {
                                        console.log("AL EMPEZAR A OPERAR")
                                        console.log("this.pointEntered después en otro IF", this.pointEntered)
                                        if (this.pointEntered) return;          //? AL EMPEZAR A OPERAR, SI YA HAY UN PUNTO, ACABA
                                        //? AL EMPEZAR A OPERAR, AL AMPEZAR A INTRODUCIR UN OPERADOR NUEVO, CUANDO HAY "0" Y SE INTRODUCE UN PUNTO, PARA PONER "0."
                                        // console.log("11111111111")
                                        // console.log("DENTRO DEL IFFFFFFFFFFFFFFFF_ cuando se introduce un punto")
                                        // console.log("number:", number);
                                        // console.log("this.currentOperation", this.currentOperation);

                                        // Agrega un "0" antes del punto
                                        // console.log("AQUÍ PARA VER SI ES AQUÍ ------------------ PARA QUITAR EL SEGUNDO 0");
                                        // console.log("lastCharacter en APPENDNUMBER en el segundo IF_____", lastCharacter);
                                        // console.log("al principio del primer IF ------EN APPENDNUMBER PARA QUITAR EL '00.' DELANTE DEL punto QUE SE INTRODUZA this.operand2", this.operand2, "this. currentoperation:", this.currentOperation)

                                        if (lastCharacter == "0") {
                                                //? DETECTA SI LA ÚLTIMA CIFRA QUE ES UN "0", AHORA AL PULSAR ".", SE ACTUALIA A "0."

                                                // console.log("this.operand2", this.operand2);
                                                // console.log("AQQQUIIIIIIII")
                                                this.operand2 += number;
                                                this.currentOperation += number;

                                        } else {
                                                this.operand2 = `0${number}`;
                                                this.currentOperation += this.operand2;
                                        };

                                        this.pointEntered = true;  //? Se ha ingresado un punto

                                        // console.log("number", number);
                                        // console.log("this.operand2 EN EL IF", this.operand2);
                                        // console.log("this.currentOperation", this.currentOperation);
                                        // console.log("this.pointEntered", this.pointEntered)


                                } else if (number == "." && this.operand2 !== "0" && !this.pointEntered) {

                                        //? CUANDO SE INTRODUCE UN "." Y YA TENEMOS ALGUNA CIFRA INTRODUCIDA Y NO HAY PUNTO ANTERIORMENTE, AÑADE EL PUNTO.

                                        //  AQUÍ AÑADE PUNTO "." , ESTA OPCIÓN YA ESTÁ MANEJADA AL PRINCIPIO. TENGE QUE REVISAR.  <<>>> ES OTRA VARIANTE
                                        console.log("this.pointEntered:", this.pointEntered);
                                        console.log("number:", number);
                                        console.log("this,ioer2 entro del cuarto IF", this.operand2);
                                        this.operand2 += number;
                                        this.currentOperation += number;
                                        this.pointEntered = true;


                                        // } else if (number !== "0" && Number !== "." && this.operand2 == "0" && lastCharacter == "0") {
                                        //         console.log("HAY QUE QUITAR EL 0 DE THIS.OPERAND2 PARA QUE PILLE EL VALOR DEL NUMERO INTRODUCIDO")
                                        //         console.log("EN APPENDNUMBER PARA QUITAR EL '0' INICIAL DELANTE DEL NUMERO QUE SE INTRODUZA this.operand2", this.operand2, "this. currentoperation", this.currentOperation)
                                        //         this.operand2 = number;
                                        //         this.currentOperation = this.currentOperation.slice(0, -1);

                                        //         this.currentOperation += this.operand2;
                                        //         console.log("al final ------EN APPENDNUMBER PARA QUITAR EL '0' INICIAL DELANTE DEL NUMERO QUE SE INTRODUZA this.operand2", this.operand2, "this. currentoperation", this.currentOperation)


                                } else if (number !== "." && number !== "0" && this.operand2 == "0") {
                                        console.log("en opción NUMBER NO .   </   NUMBER NO 0   </   OPERAND2 = 0", this.operand2);
                                        console.log("this.operand1;", this.operand1)

                                        //! ESTA OPCIÓN, NO TENGO CLARO QUE SEA NECESARIO PARTIR EN DOS CONDICIONES
                                        if (lastCharacter == "0") {
                                                //? CUANDO AL INTRODUCIR UN OPERADOR, PRIMERO INTRODUCIMOS EL "O" Y LUEGO OTRO NÚMERO, SUSTITUYE EL "O" POR EL NÚMERO

                                                // console.log("ES AQUUUUIIIII-------------------------")
                                                console.log("*****-----*****-----******-------- NO SÉ SI ES AQUÍ, PARA QUE ME DEJE PONER MÁS 0000000000000000")
                                                console.log("ES AQUÍ DONDE TENGO QUE QUITAR EL 0 PARA PONER EL NUEMRO QUE TOCA")
                                                this.currentOperation = this.currentOperation.slice(0, -1);
                                                this.operand2 = number;
                                                this.currentOperation += this.operand2;
                                                console.log("al final ------EN APPENDNUMBER PARA QUITAR EL '0' INICIAL DELANTE DEL NUMERO QUE SE INTRODUZA this.operand2", this.operand2, "this. currentoperation", this.currentOperation)

                                        } else {
                                                // console.log("ES AQUUUUIIIII-------------------------")
                                                console.log("number:", number);
                                                console.log("------thi.oper2 dentro del segundo iF", this.operand2);
                                                this.operand2 = number;
                                                // this.operand2 = `0${number}`;
                                                console.log("después de igaualar a numbber IF2", this.operand2)
                                                this.currentOperation += this.operand2;
                                        };
                                        // } else if ((!isNaN(number) && this.operand2 !== "0")) {

                                } else if (number !== "." && number !== "0" && this.operand2 !== "0") {
                                        //? CUANDO ya TENEMOS UN VALOR EN OPERAND2 Y AÑADIMOS MÁS CIFRAS AL OPERADOR, DIFERENTES DE "." Y DE "0"
                                        // console.log("ES AQUUUUIIIII-------------------------")
                                        // console.log("AQUÍ HAY QUE HACER PARA QUE PONGA EL 0 SI YA HAY OTRO NÚMERO INTRODUCIDO");
                                        this.operand2 += number;
                                        this.currentOperation += number;


                                        // } else if (number == "0" && operand2 == "0") {



                                } else if (number === "0" && this.operand2 !== "0") {

                                        //?  SI EL PENÚLTIMO CARACTER INTRODUCIDO ES UN SIGNO DE OPERACIÓN Y EL ÚLTIMO ES "0", HACE RETURN. SÓLO PERMITE PONER UN "0".
                                        let operators = ["+", "-", "*", "/"];
                                        if (lastCharacter == "0" && operators.includes(penultimateCharacter)) return;

                                        //?  AQUÍ ES PARA QUE PONGA EL 0 SI YA HAY NÚMERO EN EL OPERAND2

                                        console.log("number:", number, "typerof:", typeof (number))
                                        console.log("ES AQUUUUIIIII PARA LO DEL 0-------------------------")
                                        console.log("AQUÍ ES PARA QUE PONGA EL 0 SI YA HAY NÚMERO EN EL OPERAND2");
                                        console.log("en un IF DE  APPENDNUMBER - this.operand2 ", this.operand2);
                                        console.log("typeof", typeof (this.operand2))
                                        console.log("en un IF DE  APPENDNUMBER - this.currentOperation", this.currentOperation);


                                        this.operand2 = this.operand2.toString();
                                        if (number === this.operand2) {

                                                //? CUANDO TENEMOS "0" EN EL OPERAND2 Y SE INTRODUCE 0, SI NO LO PONEMOS ASÍ, CONCATENA "00" EN OPERANDO2 
                                                console.log("typeof", typeof (this.operand2))
                                                this.operand2 = number;
                                                this.currentOperation += number;

                                        } else {


                                                //! si se ponen "0" después del signo de operación, sí coge "0000"
                                                //! AQUÍ SI SE PONE += AÑADE EL "O" AL PRINCIPIO. 
                                                //! SI SE PONE ASÍ "= NUMBER", LUEGO NO DEJA PONER MÁS "0"
                                                this.operand2 += number;
                                                this.currentOperation += number;
                                                console.log("en un IF DE  APPENDNUMBER - this.operand2 ", this.operand2);
                                                console.log("en un IF DE  APPENDNUMBER - this.currentOperation", this.currentOperation);

                                        }

                                } else if (number == "0" && this.operand2 == "0" && lastCharacter !== "0") {
                                        console.log("******AQUÍ HAY QUE si hay un 0 y se pulse 0, no ponga '000000'****")
                                        this.operand2 = number;
                                        this.currentOperation += this.operand2;
                                        // } else if (number !== "0" && this.operand2 !== "0") {
                                        //         console.log("AQUÍ HAY QUE HACER PARA QUE PONGA EL O SI YA HAY OTRO NÚMERO INTRODUCIDO")
                                        // }
                                }

                                // TODO  [x]  ARREGLAR: si cuando se pulsa un signo de operación y se sigue añadiendo otra cifra, coge sin problemas "0000"
                                // TODO  [x]  CUANDO SE PULSA EL "0" Y A CONTINUCACIÓN SE PULSA OTROS NÚMEROS, AÑADE EL "0" AL PRINCIPIO, EJEM  03443
                                // TODO  [x]  Arreglar que al introducir 0.343, añade al principio otro cero, quedando "00.343"
                                // TODO  [x]  Arreglar que si se introducde un número acabdo en 0 ejem. 300 y después se quiere poner 5, para poner 3005, quita el último 0 y deja "305"
                                // No sé donde va esto
                                // TODO  [x]  Si tengo un número acabado en "0", ejem. "60" y pulso el punto ".", me añade otro "0" delante del ".", quedando "600."
                                // TODO  [x]  Arreglar que Si después de un signo de operación añado 000, los coge y lo añade sin problema

                                // } else if (number !== "." && this.operand2 == "0") {
                                //         console.log("******AQUÍ HAY QUE QUITAR EL 0 PARA QUE PONGA EL NÚMERO INTRODUCIDO****")
                                //         console.log("EN APPENDNUMBER PARA QUITAR EL '0' INICIAL this.operand2", this.operand2, "this. currentoperation", this.currentOperation)
                                //         this.operand2 = number;
                                //         this.currentOperation += this.operand2;
                                //         console.log("EN APPENDNUMBER PARA QUITAR EL '0' INICIAL this.operand2 -- AL FINAL DE LA FUNCIÓN", this.operand2, "this. currentoperation", this.currentOperation)


                                if (this.parenthesis) {
                                        this.currentOperation += ")";
                                }
                                // };
                        };




                        //* OPENRAND 2 SI SE PONE 000000 LO PILLA COMO NORMAL. AQUÍ HAY QUE CAMBIAR ALGO ********************

                        console.log("AL FINAL DE  APPENDNUMBER - this.operand2 ", this.operand2);
                        console.log("AL FINAL DE  APPENDNUMBER - this.currentOperation", this.currentOperation);

                        this.updateScreen();


                } catch (error) {
                        console.error("Ha ocurrido un error:", error);
                };
        };


        // TODO [ ] Arreglar que admita un paréntesis dentro de otro.
        // TODO [ ] Cuando se han introducido paréntesis, y se borran caracteres, hace cosas raras.
        // TODO [X] Cuando entre un parentesis de cierre y otro de inicio, no hay signo, hay que poner que es "*"
        // TODO [X] Cuando el último carácter es de cierre de parentesis ")" y se inicia otro paréntesis "(", concatena el resultado de los dos parentesis.


        // TODO [x] Cuando no se ha iniciado a operar y se pulsa "=", se cambia todo. 
        // TODO [x] En algún momento deja poner otro punto
        // TODO [x] Admite poner más de un "0" de inicio. Arreglarlo.
        // TODO [x] Cuando introduzco 0 y luego "." ==> me pone "00."
        // TODO [x] Manejar el añadir la segunda cifra después del signo, que no concatene. Ahora borra la pantalla
        // TODO [x] PONE MÁS DE UN PUNTO EN EL MISMO NÚMERO
        // TODO [x] ver como manejar si el primer botón pulsado es algun no admitido, ejem (+, -, /, *)

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




        operation(operator) {
                const resultElement = (document.getElementById('result').textContent);
                let lastCharacter = this.currentOperation.charAt(this.currentOperation.length - 1);
                // console.log("ultimoCaracter", lastCharacter);

                let operators = ["+", "-", "*", "÷"];
                // if (lastCharacter == "0" && operators.includes(penultimateCharacter)) return;
                console.log("operator al inicio de OPERATOR", operator)
                // if (operator == "÷") operator = "/";
                if (this.currentOperation == "" && (operator == "*" || operator == "/")) {
                                console.log("this.curremtOP vacía");
                                this.operator = operator;
                                this.operand2 = 0;
                                this.currentOperation = this.operand2;
                                // } else {
                                //         return;
                        // };
                };

                // console.log("aquuuuiiiiii   lastCharacter",lastCharacter)
                // if (isNaN(lastCharacter)) {
                //         console.log("aquuuuiiiiii   lastCharacter",lastCharacter)
                // };

                if (operators.includes(lastCharacter)) {
                        console.log("lastCharacter en OPERATION EN EL PRIMER IF:", lastCharacter);
                        if (lastCharacter == operator) {
                                console.log("AAAAQQQQQUUUUIIIIII consigo pillar el operador REPETIDOOOOO");
                                return;
                        } else {
                                console.log("EN EL ELSE DE OPERATION this.currentOperation", this.currentOperation);
                                console.log("lastCharacter", lastCharacter);
                                console.log("operator", operator);
                                this.operator = operator;
                                // this.operand2 = 0;
                                this.currentOperation = this.currentOperation.slice(0, -1) + this.operator;
                                // this.currentOperation = this.currentOperation + this.operator;
                                console.log("EN EL ELSE DE OPERATION DESPUÉS DE CAMBIAR SIGNOS this.currentOperation", this.currentOperation);
                                console.log("lastCharacter", lastCharacter);
                                console.log("operator", operator);

                        }
                                // console.log
                        // } else {
                                // }
                        // if (this.currentOperation == "" && (operator == "*" || operator == "/")) {
                        // !  no entiendo bien por qué he puesto lo de CURRENTOPERATION. AHORA NO HACE NADA
                 } else {

                        if (this.parenthesis) {
                                const withoutEndParenthesis = resultElement.slice(0, -1);
                                console.log("withoutParenthesis", withoutEndParenthesis);
                                this.currentOperation = withoutEndParenthesis;
                                console.log("this.currentOperation después de quitarparentesis", this.currentOperation);

                        };

                        if (!isNaN(lastCharacter)) {
                                // if (!isNaN(lastCharacter || lastCharacter == ".")) {
                                //! console.log("Es un numero");
                                this.operator = operator;
                                this.currentOperation += this.operator;
                                console.log("this.currentOperation cuando lastcaracter es un numero", this.currentOperation);

                        } else {
                                //! console.log("NO es un numero")
                                //! SI ACTIVO ESTA LÍNEA ME BORRA DATOS DE LA PAMTALLA Y NO CALCULA BIEN
                                // this.currentOperation = this.currentOperation.slice(0, -1);
                                this.operator = operator;
                                this.currentOperation += this.operator;
                                console.log("this.currentOperation cuando lastcaracter NOO es un numero", this.currentOperation);
                        };

                };
                // }

                if (this.parenthesis) {
                        this.currentOperation += ")";
                }

                this.operand2 = 0;
                this.pointEntered = false;

                // console.log("this.operator", this.operator);
                // console.log("operator", operator)
                // this.currentOperation = this.currentOperation + this.operator;
                this.updateScreen();
        };

        percentage() {
                try {
                        this.operator = "%";
                        this.currentOperation = this.currentOperation + this.operator;

                        this.updateScreen();

                } catch (error) {
                        console.error("Error:", error);

                };
        };


        addParenthesis() {
                // let lastCharacter = this.currentOperation.charAt(this.currentOperation.length - 1);
                // console.log("aquuuuiiiiii  en ADDPARENTHESIS lastCharacter",lastCharacter);

                try {
                        
                        // if (!isNaN(lastCharacter)) {
                        //         console.log("aquuuuiiiiii  DENTRO DEL IF EN ADDPARENTHESIS lastCharacter",lastCharacter)
                        //         this.operand2 = "*()";

                        // } else {
                                this.operand2 = "()";
                        // }

                        this.currentOperation += this.operand2;
                        this.parenthesis = true;
                        this.openParenthesis++;

                        this.updateScreen();


                } catch (error) {
                        console.error("Error:", error);
                };
        };


        endParenthesis() {
                try {
                        // this.operand2 = "()";
                        // this.currentOperation += this.operand2;
                        this.closeParenthesis++;

                        if (this.openParenthesis === this.closeParenthesis) {
                                this.parenthesis = false;
                        };

                        this.updateScreen();

                } catch (error) {
                        console.error("Error:", error);
                };
        };


        equal(result) {
                // let vuelta = false;
                const resultElement = (document.getElementById('result').textContent);
                console.log("resultElement", resultElement)
                console.log("this.currentOperation en EQUAL", this.currentOperation);
                console.log("this.operand2", this.operand2);
                console.log("this.operand1 ", this.operand1);


                try {

                        // if (this.currentOperation = "") return;

                        // if (resultElement == "0") return;

                        if (result == "0" && this.currentOperation == "") {
                                // console.log("ESTA ES LA OPCIÓN QUE BUSCO")
                                this.operand1Element.innerHTML = result;
                                this.operand2Element.innerHTML = 0;

                        } else if (result && this.currentOperation !== "") {
                                // if (resultElement !== "0") {
                                // if ()
                                console.log("ESTA ES LA PRIMERA OPCIÓN-----CUANDO HAY RESULTADO")
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
                                this.parenthesis = false;
                                this.openParenthesis = 0;
                                this.closeParenthesis = 0;
                                // console.log("this.openParenthesi y  this.closeParenthesis",this.openParenthesis, this.closeParenthesis)



                        } else if (result && this.currentOperation !== "") {
                                // console.log("rresult", result)
                                // console.log("ESTA ES LA SEGUNDA OPCIÓN-----esta opción no sé que hace")
                                // console.log("EN EL ELSE DE EQUAL", this.currentOperation)
                                this.operand1Element.innerHTML = `${this.currentOperation} =`;
                                this.operand2Element.innerHTML = this.currentOperation;
                        };

                        this.isEqualPressed = true;
                        return this.currentOperation;

                } catch (error) {
                        console.error("Error:", error);

                };
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

