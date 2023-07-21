# Ejercicios 1 - Node.js

Versión de Node.js requerida: 18.17.0 LTS

**¿Necesitas repasar?**

- Repositorio con código de ejemplo: https://github.com/midudev/curso-node-js
- Vídeo de la primera clase: https://github.com/midudev/curso-node-js#-videos-con-las-clases

## Ejercicios

1. Con `npm init`, crea un archivo `package.json` en el directorio raíz del proyecto con esta información. El nombre del proyecto debe ser `ejercicios-nodejs`, todo lo demás no importa.

2. En el archivo `index.js`, completa la función `writeFile`:

Recibe tres parámetros:
- `path`: el path del archivo a escribir
- `content`: el contenido del archivo a escribir
- `callback`: una función que se ejecutará cuando se haya escrito el archivo

La función debe escribir en el archivo especificado en el path el contenido especificado en el parámetro `content`. Cuando termine de escribir el archivo, debe ejecutar la función `callback` que recibe como parámetro.

Si el archivo ya existe, debe ser reemplazado.
Si el path no existe, debe ser creado.

Pistas: `fs.mkdir` puede crear directorios que no existen. Revisa la documentación de Node.js para ver cómo se usa y sus posibles opciones.

3. En el archivo `index.js`, completa la función `readFileAndCount`:

Recibe dos parámetros:
- `word`: la palabra a buscar en el archivo
- `callback`: una función que se ejecutará cuando se haya leído el archivo. Sigue el patrón de Node.js, el primer parámetro es el error y el segundo el resultado.

El archivo a leer lo leerá de los argumentos de la línea de comandos. Para ello, puedes usar `process.argv` que es un array con los argumentos de la línea de comandos.

> Recuerda que el primer argumento es el path de Node.js, el segundo es el path del archivo que se está ejecutando y **el tercero es el primer argumento que pasamos nosotros**.

La función debe leer el archivo y ejecutar la función `callback` que recibe como parámetro con el resultado de la operación. El resultado de la operación debe ser el número de veces que aparece la palabra en el archivo.

Si el archivo no existe, debe devolver `0`.

Si no se especifica la palabra a buscar, se le debe pasar un error a la función `callback` con le mensaje `No se ha especificado la palabra a buscar`.

Si no se especifica el path del archivo como argumento, se le debe pasar un error a la función `callback` con el mensaje `No se ha especificado el path del archivo`.

Pista: Ten cuidado al trabajar con callbacks y recuerda que después de llamar al `callback` no se debe ejecutar más código.