//import { promises as fsPromises } from 'fs'
import { ObjectToCSV } from '../interfaces/objectToCSV'
import { obtainContent } from '../helpers/obtainContent'
import { writeToCSVAsync } from '../helpers/writeToCSV'

async function objectToCSVAsync<T>(params: ObjectToCSV<T>): Promise<boolean> {
  let { jsonData, fields, filePath, filter } = params
  let content = obtainContent<T>(fields, jsonData as T[], filter)

  return writeToCSVAsync(filePath, content)
}

export { objectToCSVAsync }
