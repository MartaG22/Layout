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
        calculator.eraseNumber();
});

operationButtons.forEach(button => {
        button.addEventListener("click", () => {
                calculator.operation(button.innerHTML);
        });
});

piButton.addEventListener("click", () => {
        const pi = 3.1415926536;
        calculator.appendNumber(pi);
});

eButton.addEventListener("click", () => {
        const numberE = 2.71828182846;
        calculator.appendNumber(numberE);
});

initialParenthesis.addEventListener("click", () => {
        calculator.addParenthesis();
});

endParenthesis.addEventListener("click", () => {
        calculator.endParenthesis();
});



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





async function addDataMakeRequest(data, apiUrl) {
        try {
                console.log("Haciendo solicitud a:", apiUrl);
                console.log ("DATOS RECIBIDOS EN addDataMakeRequest", data)
                const response = await fetch(apiUrl, {
                        method: "POST",
                        headers: { "Content-Type": "application/json" },
                        body: JSON.stringify(data),
                });
                console.log("response en addDataMakeRequest", response)

                if (!response.ok) {
                        throw new Error(`Error en la solicitud: ${response.status}`);
                }

                return response.json();
                
        } catch (error) {
                console.error("Error en makeRequest:", error);
                throw error;
        };
};


async function rescueDataMemory(apiUrl) {
        try {
                const response = await fetch(apiUrl, {
                    method: "GET", // Cambiado a GET ya que estamos rescatando información
                    headers: { "Content-Type": "application/json" },
                });
        
                console.log("response en rescueDataMemory", response)
                if (!response.ok) {
                    throw new Error(`Error en la solicitud: ${response.status}`);
                }
        
                console.log("response en rescueMemory", response)
                return response.json();




        // try {
        //         const response = await fetch(apiUrl, {
        //                 method: "GET",
        //                 headers: { "Content-Type": "application/json" },
        //                 // body: JSON.stringify(data),
        //         });
        //         console.log("response en addDataMakeRequest", response)

        } catch (error) {
                console.log("Error en rescueMemory", error);
                throw error;
        };
};

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


addMemory.addEventListener("click", async () => {

        try {
                let addData = calculator.addMemory();
                console.log("aVer en addmemory.addeventListener en MAIN", addData);
                
                // Realiza la solicitud y espera la respuesta
                // const respuesta = await makeRequest(addData, `${apiUrl}/addMemory`);
                const respuesta = await addDataMakeRequest(addData, `${apiUrl}/addMemory`);
                console.log("Respuesta desde el servidor:", respuesta);
                // Verifica el estado de la respuesta
                if (respuesta.success) {
                        console.log("La solicitud fue exitosa");
                        if (addData.currentOperation !== ""){
                                console.log("TENGO QUE PONER EL BOTÓN EN OCLOR");
                                // ! aquí tengo que poner el botón de memoria en color
                        }
                        // Obtener el elemento span por su ID
                        var sneakMemory = document.getElementById("sneakMemory");
                        // Modificar el contenido del span
                        // sneakMemory.textContent = "M";

                        // O puedes añadir estilos o clases al span
                        // sneakMemory.style.color = "red";
                        // sneakMemory.margin-left = "1.5rem";
                        // sneakMemory.style.top = "0";
                        // sneakMemory.style.display = "flex"
                        // sneakMemory.style.flexDirection = "column"
                        // sneakMemory.style.alignItems = "start";

                        //! aquí hay que controlar un evento que ponga una "M" en la pantalla para indicar que hay datos en memoria.
                        //! también se puede cambiar de color la tecla de la memoria
                } else {
                        throw new Error(`Error en la solicitud: ${respuesta.status}`);
                };
                
        } catch (error) {
                console.error("Error en el frontend al hacer la solicitud:", error.message);
        }
});


substractMemory.addEventListener("click", async () => {
        // console.log("SUBSTRACT MEMORY");
        try {
                let addData = calculator.substractMemory();
                console.log("aVer en addmemory.addeventListener en MAIN", addData);
                let result = await addDataMakeRequest(addData, `${apiUrl}/addMemory`);
                console.log("RESPUESTA result EN ----substractMemory---- EN ADDMEMORY EN MAIN ", result)
        } catch (error) {
                // Maneja el error si es necesario
                console.error("Error al realizar la solicitud:", error);
        };
});



rescueMemory.addEventListener("click", async () => {
        console.log("RESCAT  MEMORY");

        try {
                // console.log("this.currentOperation AL PRINCIPO DE RESCUEMEMORY--", this.currentOperation);
                let result = await rescueDataMemory(`${apiUrl}/rescueMemory`);
                console.log("RESPUESTA result EN ----rescueMemory---- EN rescueMemory EN MAIN ", result);
                console.log("RESPUESTA resultOperation EN ----rescueMemory---- EN rescueMemory EN MAIN ", result.resultOperation);
                if (result.success) {
                        calculator.rescueDataMemory(result.resultOperation);

                } else {
                        console.error("Error en la solicitud:", response.status);
                        // Manejar errores, si es necesario
                }
        } catch (error) {
                // Maneja el error si es necesario
                console.error("Error al realizar la solicitud:", error);
        };

});




resetMemory.addEventListener("click", async () => {
        try {
                const resetData = {
                        sequence: 0,
                        currentOperation: 0
                };
                let result = await addDataMakeRequest(resetData, `${apiUrl}/resetMemory`);
                calculator.resetMemory();
                console.log("result en resetMemory", result)

                rescueMemory.style.color = "rgb(160, 160, 160)";

                } catch (error) {
                // Maneja el error si es necesario
                console.error("Error al realizar la solicitud:", error);
        };});


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



    