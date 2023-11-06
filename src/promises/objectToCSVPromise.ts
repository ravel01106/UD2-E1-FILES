// import { promises as fsPromises } from 'fs'
import { obtainContent } from '../helpers/obtainContent'
import { ObjectToCSV } from '../interfaces/objectToCSV'
import { writeToCSVPromise } from '../helpers/writeToCSV'

function objectToCSVPromise<T>(params: ObjectToCSV<T>): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    let { jsonData, fields, filePath, filter } = params
    let content = obtainContent<T>(fields, jsonData as T[], filter)

    writeToCSVPromise(resolve, reject, filePath, content)
  })
}

export { objectToCSVPromise }
