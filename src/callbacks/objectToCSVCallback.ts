//import fs from 'fs'
import { ObjectToCSV } from '../interfaces/objectToCSV'
import { CSVCallback } from '../interfaces/objectToCSVCallback'
import { obtainContent } from '../helpers/obtainContent'
import { writeToCSVCallback } from '../helpers/writeToCSV'

function objectToCSVCallback<T>(params: ObjectToCSV<T>, callback: CSVCallback): void {
  let { jsonData, fields, filePath, filter } = params
  let content = obtainContent<T>(fields, jsonData as T[], filter)

  writeToCSVCallback(filePath, content, callback)
}

export { objectToCSVCallback }
