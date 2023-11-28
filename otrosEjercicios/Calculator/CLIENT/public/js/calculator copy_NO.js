class Caltulator {
        constructor(operand1Element, operand2Element) {
                this.operand1Element = operand1Element;
                this.operand2Element = operand2Element;
                this.currentOperation = "";
                this.clear();
        };

        clear(){
                this.operand1 = 0;
                this.operand2 = 0;
                this.operator = "";    
                this.currentOperation = "";
                this.updateScreen();
        };
        
        updateScreen() {
                this.operand1Element.innerHTML = this.operand1 + this.operator;
                // this.operand1Element.innerHTML = this.currentOperation;
                this.operand2Element.innerHTML = this.operand2;
                console.log(this.operand1, this.operand2)
        };

        appendNumber(number) {
                
                // this.operand2 = this.operand2;
                if (number === "." && this.operand2.includes(".")) return;
                if (number === "." && this.operand2 === 0) this.operand2 = this.operand2 + number;
                this.operand2 = number !== "." && this.operand2 == "0" ? number: this.operand2 + number;
                console.log("en appendNumber", this.operand2)
                console.log("en appendNumber", typeof(this.operand2))
                // this.currentOperation = this.currentOperation + this.operand2;
                // console.log("currentoperation", this.currentOperation)
                this.updateScreen();
        };

        eraseNumber() {
                if (this.operand2 === 0) return;
                this.operand2 = this.operand2.slice(0, -1);
                if (this.operand2.length === 0) this.operand2 = 0;
                this.updateScreen();
        };

        operation(operator){
                if(this.operator) {
                        this.calculate();
                };
                this.operator = operator;

                this.operand1 = parseFloat(this.operand2) === 0 ? this.operand1 : this.operand2;
                if (this.currentOperation === "") {
                        console.log("UNO")
                        this.currentOperation = `${this.operand1} ${operator}`;
                        console.log("aquiii", this.currentOperation)
                        
                } else {
                        console.log(typeof(this.currentOperation))
                        console.log(this.operand1, this.operand2)
                        this.currentOperation = this.currentOperation + this.operator;
                        console.log("aquiii abajo", this.currentOperation)
                        
                }
                
                this.operand2 = 0;
                this.updateScreen();
        };

        calculate() {
                switch(this.operator) {
                        case "+":
                                // console.log(this.operand1, this.operand2)
                                this.operand1 = parseFloat(this.operand1) + parseFloat(this.operand2);
                                break;
                        case "-":
                                this.operand1 = parseFloat(this.operand1) - parseFloat(this.operand2);
                                break;
                        case "*":
                                this.operand1 = parseFloat(this.operand1) * parseFloat(this.operand2);
                                break;
                        case '\u00F7':
                        // case "÷":
                                this.operand1 = parseFloat(this.operand1) / parseFloat(this.operand2);
                        break;
                };
                this.operator = "";
                this.operand2 = 0;
                this.updateScreen();
        };

        percentage() {
                console.log(this.operand1, this.operand2)
                
                this.operand1 = parseFloat(this.operand2) * 100;
                console.log(this.operand1, this.operand2)
                // console.log(this.operand1)

        }


};
const operand1Element = document.querySelector("[data-screen-operand]");
const operand2Element = document.querySelector("[data-screen-result]");
const clearButton = document.querySelector("[data-clear]");
const numberButtons = document.querySelectorAll("[data-number]");
const eraseNumber = document.getElementById("erase");
const operationButtons = document.querySelectorAll("[data-operation]");
const percentageButton = document.getElementById("percentage");
// const addOperation = document.getElementById("add");
// const substractOperation = document.getElementById("substract");
// const multiplyOperation = document.getElementById("multiply");
// const divideOperation = document.getElementById("divide");
const equalButton = document.getElementById("equal");

const calculator = new Caltulator(operand1Element, operand2Element);


clearButton.addEventListener("click", () => {
        calculator.clear();
});

numberButtons.forEach(button => {
        button.addEventListener("click", () => {
                console.log("Button:", button);
                calculator.appendNumber(button.innerHTML);
        });
});

eraseNumber.addEventListener("click", () => {
        console.log("eraseNumber.addEvent");
        calculator.eraseNumber();
});


operationButtons.forEach(button => {
        button.addEventListener("click", () => {
                calculator.operation(button.innerHTML);
        });
});

equalButton.addEventListener("click", () => {
        calculator.calculate();
})

percentageButton.addEventListener("click", () => {
        calculator.percentage();
})


// export default Calculator;

// document.querySelector('.logout-button').addEventListener('click', () => {
//         const leaveRoom = confirm("Vols desconnectar?");
//         if(leaveRoom){
//             sessionStorage.clear();
//             window.location.replace("./login.html");
//         }
//     })
  