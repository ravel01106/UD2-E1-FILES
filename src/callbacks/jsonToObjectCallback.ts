import fs from 'fs'
import { jsonCallback } from '../interfaces/jsonToObjectCallback'

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
