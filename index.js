const fs = require('node:fs/promises');
const path = require('node:path');

// Ejercicio 2
async function writeFile(filePath, data, callback) {
    try {
        const dir = path.dirname(filePath);
        await fs.mkdir(dir, { recursive: true });
    } catch (error) {
        console.log('Error creando directorio', error);
        process.exit(1);
    }

    try {
        await fs.writeFile(filePath, data);
    } catch (error) {
        console.log(`Error creando fichero en la ruta: ${filePath}`, error);
        process.exit(1);
    }

    callback();
}

// Ejercicio 3
async function readFileAndCount(word, callback) {}

module.exports = {
    writeFile,
    readFileAndCount,
};
