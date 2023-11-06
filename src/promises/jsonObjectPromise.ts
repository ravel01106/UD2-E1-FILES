import { promises as fsPromises } from 'fs'

/**
 * jsonToObjectPromise(): This function is intended to read a file
 * from path that we pass by parameter and the content obtained converts
 * it into an object array. This array is returned.
 *
 * @param jsonFilePath is the path to be read
 *
 * @returns a Promise of an object array or an Error
 */

function jsonToObjectPromise(jsonFilePath: string): Promise<object[]> {
  return new Promise<object[]>((resolve, reject) => {
    fsPromises
      .readFile(jsonFilePath, 'utf-8')
      .then((data) => resolve(JSON.parse(data)))
      .catch((err) => reject(err))
  })
}

export { jsonToObjectPromise }
