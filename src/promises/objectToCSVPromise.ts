import { promises as fsPromises } from 'fs'
import { obtainContentWithoutFilter, obtainContentWithFilter } from '../helpers/obtainContent'
import { ObjectToCSV } from '../interfaces/objectToCSV'


function objectToCSVPromise<T>(params:ObjectToCSV<T>): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    let {jsonData, fields, filePath, filter} = params
    let content = ''

    if (filter) {
      content = obtainContentWithFilter<T>(fields, jsonData as T[], filter)
    } else {
      content = obtainContentWithoutFilter<T>(fields, jsonData as T[])
    }

    fsPromises
      .writeFile(filePath, content)
      .then(() => resolve(true))
      .catch(() => reject(false))
  })
}

export { objectToCSVPromise }
