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
async function readFileAndCount(word, callback) {
    let path = process.argv[2];
    let count = 0;

    if (!word) {
        return callback(new Error('No se ha especificado la palabra a buscar'));
    }

    if (!process.argv[2]) {
        return callback(new Error('No se ha especificado el path del archivo'));
    }

    try {
        const fileContent = await fs.readFile(path, 'utf-8');

        count = fileContent.split(' ').filter((item) => item.replace(/[^a-zA-Z]+/g, '') === word).length;

        return callback(null, count);
    } catch (error) {
        return callback(null, count);
    }
}

module.exports = {
    writeFile,
    readFileAndCount,
};
