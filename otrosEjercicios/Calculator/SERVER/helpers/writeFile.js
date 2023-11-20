const fs = require('fs');
// const data = './app/models/numbersMemory.json'


// Función para modificar y escribir en el archivo JSON
function writeFile2(dataFile, newData) {
        console.log('data en writeFile2', newData)
        // console.log('otro', otro)
        //! Modificar datos
        // datos.nuevoCampo = 'Nuevo valor';

        // Escribir archivo JSON modificado
        try {

                const modifyData = JSON.stringify(newData);
                // console.log('modifyData', modifyData)
                fs.writeFileSync(dataFile, modifyData, 'utf8', (error) => {
                        if (error) {
                                console.error(error);
                                return;
                        }
                        console.log('modifyData otro', newData.operationSequence)
                        
                        //   console.log('Archivo JSON guardado correctamente.');
                });
        } catch (error) {
                console.error('Error al escribir el archivo:', error);
        }
}




function writeFile(filePath, content, callback) {
        fs.writeFile(filePath, content, 'utf8', (error) => {
                if (error) {
                        console.error(error);
                        return;
                }

                console.log('Archivo guardado correctamente.');
        });
};




module.exports = writeFile2;
