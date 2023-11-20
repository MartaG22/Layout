class Caltulator {
        constructor(operand1Element, operand2Element) {
                this.operand1Element = operand1Element;
                this.operand2Element = operand2Element;
                // this.clear();
        };

        clear(){
                this.operand1 = 0;
                this.operand2 = 0;
                this.operator = "";    
                this.updateScreen();
        };
        
        updateScreen() {
                this.operand1Element.innerHTML = this.operand1 + this.operator;
                this.operand2Element.innerHTML = this.operand2;
        };

        appendNumber(number) {
                
                this.operand2 = this.operand2.toString();

                if (number === "." && this.operand2.includes(".")) return;
                if (number === "." && this.operand2 === 0) this.operand2 = this.operand2 + number;
                this.operand2 = number !== "." && this.operand2 == "0" ? number: this.operand2.toString() + number;
                
                this.updateScreen();
        };

        eraseNumber() {
                console.log("this.operand2", this.operand2);
                this.operand2 = this.operand2.slice(0, -1);
                console.log(this.operand2.length);
                if (this.operand2.length === 0) this.operand2 = 0;
                this.updateScreen();
        };

};
const operand1Element = document.querySelector("[data-screen-operand]");
const operand2Element = document.querySelector("[data-screen-result]");
const clearButton = document.querySelector("[data-clear]");
const numberButtons = document.querySelectorAll("[data-number]");
const eraseNumber = document.getElementById("erase");

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
