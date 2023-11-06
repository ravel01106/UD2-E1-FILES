// import { promises as fsPromises } from 'fs'
import { obtainContent } from '../helpers/obtainContent'
import { ObjectToCSV } from '../interfaces/objectToCSV'
import { writeToCSVPromise } from '../helpers/writeToCSV'

/**
 *  This function creates a CSV file, the path of which is passed
 *  by parameter, where we will pass formated content using 
 * the fields and data passed by parameter too. 
 * It should be noted that if the user sets a filter, the data 
 * that meets the filter will be filtered.
 * Finally, the function will return a true or an error.
 * @param params 
 * is a object with the necesary parameters:
 * -> **jsonData**: is the array of the data.
 * -> **fields**: the fields we want to write.
 * -> **filePath**: is the path to the file to be created or modified.
 * -> **filter**: is an optional parameter which performs a filtering
 *    of the data.
 * @returns 
 * a promise that return true if the file has been written properly or an error
 */

function objectToCSVPromise<T>(params: ObjectToCSV<T>): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    let { jsonData, fields, filePath, filter } = params
    let content = obtainContent<T>(fields, jsonData as T[], filter)

    writeToCSVPromise(resolve, reject, filePath, content)
  })
}

export { objectToCSVPromise }
