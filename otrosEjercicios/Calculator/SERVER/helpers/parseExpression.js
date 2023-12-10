// const math = require('mathjs');

// function parseExpresion(expresion) {
// const tokens = expresion.match(/(\d+\.\d+|\d+|[+\-*/])/g) || [];
// const secuencia = tokens.map(token => {
//     if (/^\d+(\.\d+)?$/.test(token)) {
//         return parseFloat(token);
//     } else {
//         return token;
//     }
// });
// return secuencia;
// };



function parseExpresion(expression) {
        console.log("expresion en PARSEEXPRESION", expression)
        if (typeof expression !== 'string') {
                throw new Error('La expresión no es una cadena.');
        }

        const regex = /(\d+(\.\d+)?|[+\-*/])/g;
        const tokens = expression.match(regex) || [];

        const sequence = tokens.map(token => {
                if (/^\d+(\.\d+)?$/.test(token)) {
                        return parseFloat(token);
                } else {
                        return token;
                }
        });

        return sequence;
};


module.exports = parseExpresion;
