import fs from 'fs'
import { jsonCallback } from '../interfaces/jsonToObjectCallback'

/**
 * JSONToObjectCallback(): This function is intended to read a file
 * from path that we pass by parameter and the content obtained converts
 * it into an object array. This array is returned within the callback parameter.
 *
 * @param jsonFilePath
 * is the path to be read
 *
 * @returns
 * returns within the callback parameter the object array or an Error
 */

function JSONToObjectCallback(jsonFilePath: string, callback: jsonCallback): void {
  fs.readFile(jsonFilePath, 'utf-8', (err, data) => {
    if (err != null) {
      console.log('Error al leer los datos.')
      callback(err)
    } else {
      console.log('Se han leido los datos correctamente.')
      const dataObject: object[] = JSON.parse(data)
      callback(null, dataObject)
    }
  })
}

export { JSONToObjectCallback }
