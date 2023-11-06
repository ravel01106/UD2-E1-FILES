import { promises as fsPromises } from 'fs'

/**
 * jsonToObjectAsync(): This function is intended to read a file
 * from path that we pass by parameter and the content obtained converts
 * it into an object array. This array is returned.
 *
 * @param jsonFilePath is the path to be read
 *
 * @returns a Promise of an object array or an Error
 */

async function jsonToObjectAsync(jsonFilePath: string): Promise<object[]> {
  try {
    const data = await fsPromises.readFile(jsonFilePath, 'utf-8')
    // if it read the content properly, we return the data converted
    // into an array of objects
    return JSON.parse(data)
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message)
    } else {
      throw new Error('error desconocido')
    }
  }
}

export { jsonToObjectAsync }
