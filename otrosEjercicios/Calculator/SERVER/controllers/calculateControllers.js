const Calculator = require("../class/calculator_class.js");
const calculator = new Calculator;
const dataFile = require("../models/numbersMemory.json");
console.log(dataFile);

const sendResult = async (req, res) => {
        try {
                const currentOperation = await req.body;
                console.log("CurrentOperation:", currentOperation);
        } catch (error) {
                return { status: "error", message: error.message };
        };
};

module.exports = sendResult;