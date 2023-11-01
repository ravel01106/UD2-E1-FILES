import { promises as fsPromises } from 'fs'

async function jsonToObjectAsyncAwait(jsonFilePath:string): Promise<object[]> {
    try {
        const data = await fsPromises.readFile(jsonFilePath, 'utf-8')
        return JSON.parse(data)
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message)
        } else {
            throw new Error('error desconocido')
        }
    }
}

export {jsonToObjectAsyncAwait}