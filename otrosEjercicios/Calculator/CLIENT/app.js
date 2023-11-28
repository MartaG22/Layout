// const express = require('express');
// const readFile = require("../SERVER/helpers/readFile.js");
// const writeFile = require("../SERVER/helpers/writeFile.js");
// const validationCaracters = require("../SERVER/helpers/validation.js");
// const Calculator = require("../SERVER/class/calculator_class.js");
// // import {Calculator} from "./class/calculator_class.js";
// const dataFile = "./models/numbersMemory.json";

// const operands = document.querySelector("operands");
// console.log(operands);

// const calculator = new Calculator;
// console.log(calculator);




const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, './public/HTML/index.html'))
})

app.listen(PORT, () => {
        console.log(`Client server listening on port ${PORT}`)
})