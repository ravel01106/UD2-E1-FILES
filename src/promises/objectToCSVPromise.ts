import { promises as fsPromises } from 'fs'

function objectToCSVPromise<T>(jsonData: T[], fields: string[], filePath: string): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    let content = ''
    fields.forEach((field) => {
      content += field.slice(0, 1).toUpperCase() + field.slice(1) + ','
    })
    content = content.slice(0, -1) + '\n'

    jsonData.forEach((data) => {
      Object.keys(data as object).map((key) => {
        fields.forEach((field) => {
          if (field.toLowerCase() == key.toLowerCase()) {
            content += data[key as keyof T] + ','
            //content += [key as keyof T] + ','
          }
        })
      })
      content = content.slice(0, -1) + '\n'
    })

    fsPromises
      .writeFile(filePath, content)
      .then(() => resolve(true))
      .catch(() => reject(false))
  })
}

export { objectToCSVPromise }
