import { promises as fsPromises } from 'fs'

function jsonToObjectPromise(jsonFilePath:string):Promise<object[]>{
    return new Promise<object[]>((resolve, reject) => {
        fsPromises.readFile(jsonFilePath, 'utf-8')
        .then((data) => resolve(JSON.parse(data)))
        .catch((err) => reject(err))
    })
}

export {jsonToObjectPromise}