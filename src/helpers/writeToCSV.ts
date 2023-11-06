import fs, { promises as fsPromises } from 'fs'
import { checkDirectory } from './checkDirectory'

/**
 * writeToCSVPromise(): this function writes inside a file,
 * whose path is passed by parameter, the content passed
 * by parameter too.
 * If written correctly, it returns true in the resolve function.
 * If there is an error, it returns it in the reject function.
 * Because this function will be called within another promise.
 * @param resolve
 * is resolve function of the promise that calls this function.
 * @param reject
 * is reject function of the promise that calls this function.
 * @param filePath
 * is the path to the file to be created or modified.
 * @param content
 * is the content to be written in the file.
 */

async function writeToCSVPromise(resolve: Function, reject: Function, filePath: string, content: string) {
  checkDirectory('./src/exports')

  fsPromises
    .writeFile(filePath, content)
    .then(() => resolve(true))
    .catch(() => reject(new Error('Error al escribir el documento')))
}

/**
 * writeToCSVCallback(): this function writes inside a file,
 * whose path is passed by parameter, the content passed
 * by parameter too.
 * If written correctly, it returns true in the callback function.
 * If there is an error, it returns it in the callback function.
 * @param filePath
 * is the path to the file to be created or modified.
 * @param content
 * is the content to be written in the file.
 * @param callback
 * is the function which will return the resultof the function
 */

const writeToCSVCallback = (filePath: string, content: string, callback: Function) => {
  checkDirectory('./src/exports')
  fs.writeFile(filePath, content, (err) => {
    if (err != null) callback(err)
    else callback(null, true)
  })
}

/**
 * writeToCSVAsync(): this function writes inside a file,
 * whose path is passed by parameter, the content passed
 * by parameter too.
 * If written correctly, it returns true within promise
 * If there is an error, it returns it within promise.
 * @param filePath
 * is the path to the file to be created or modified.
 * @param content
 * is the content to be written in the file.
 * @returns
 * return a promise with true or an error
 */

async function writeToCSVAsync(filePath: string, content: string): Promise<boolean> {
  checkDirectory('./src/exports')
  try {
    await fsPromises.writeFile(filePath, content)
    return true
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('error desconocido')
    }
  }
}

export { writeToCSVPromise, writeToCSVCallback, writeToCSVAsync }
