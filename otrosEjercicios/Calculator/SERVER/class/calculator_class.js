class Calculator {
    constructor(operands, result) {
        this.operands = operands;
        this.result = result;
        this.clear();
    };

    clear(){
        this.operand1 = 0;
        this.operand2 = 0;
        this.operator = "";

        this.operands.innerHTML = this.operands;
        this.result.innerHTML = this.result;
    };

    add(num1, num2) {
        console.log("ESTAS SUMMANDO", num1, num2);
        return parseFloat(num1) + parseFloat(num2);
    };
    substract(num1, num2) {
        console.log("typeof de num1 en CLASS", typeof num1);
        console.log("typeof de num2 en CLASS", typeof num2);
        return parseFloat(num1) - parseFloat(num2);
    };
    multiply (num1, num2 ) {
        return num1 * num2;
    };
    divide(num1, num2) {
        console.log("typeof de num1 en CLASS", typeof num1);
        console.log("typeof de num2 en CLASS", typeof num2);
        return parseFloat(num1) / parseFloat(num2);

        // return num1 / num2;
    };
    module({ num1, num2 }) {
        return num1 % num2;
    };



}

module.exports = Calculator;
