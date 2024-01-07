const math = require('mathjs');

function solveSequence(sequence) {
        console.log("sequence:", sequence)
        try {
                const result = math.evaluate(sequence.join(' '));
                console.log("result", result)
                return result;
        } catch (error) {
                throw new Error("Error al evaluar la secuencia numérica");
        };
};

module.exports = solveSequence;