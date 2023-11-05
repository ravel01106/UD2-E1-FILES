
import { promises as fsPromises } from 'fs'
import { ObjectToCSV } from '../interfaces/objectToCSV'
import { obtainContentWithoutFilter, obtainContentWithFilter } from '../helpers/obtainContent'

async function objectToCSVAsync<T>(params:ObjectToCSV<T>):Promise<boolean> {
    let {jsonData, fields, filePath, filter} = params
    let content = ''

    if (filter) {
        content = obtainContentWithFilter<T>(fields, jsonData as T[], filter)
    } else {
        content = obtainContentWithoutFilter<T>(fields, jsonData as T[])
    }
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

export {objectToCSVAsync}