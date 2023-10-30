import fs from 'fs'

type jsonCallback = (err: NodeJS.ErrnoException | null, data?: object[]) => void

function JSONToObjectCallback(jsonFilePath: string, callback: jsonCallback): void {
  fs.readFile(jsonFilePath, 'utf-8', (err, data) => {
    if (err != null) {
      console.log('ERROR tu madre en tanga')
      callback(err)
    } else {
      console.log('Se han leido los datos correctamente')
      const dataObject: object[] = JSON.parse(data)
      callback(null, dataObject)
    }
  })
}

export { JSONToObjectCallback }
