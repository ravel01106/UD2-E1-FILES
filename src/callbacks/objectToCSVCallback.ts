import fs from 'fs'
import { ObjectToCSV } from "../interfaces/objectToCSV";
import { CSVCallback } from "../interfaces/objectToCSVCallback";
import { obtainContentWithoutFilter, obtainContentWithFilter } from '../helpers/obtainContent'

function objectToCSVCallback<T>(params:ObjectToCSV<T>, callback:CSVCallback):void {
    let {jsonData, fields, filePath, filter} = params
    let content = ''

    if (filter) {
        content = obtainContentWithFilter<T>(fields, jsonData as T[], filter)
    } else {
        content = obtainContentWithoutFilter<T>(fields, jsonData as T[])
    }

    fs.writeFile(filePath, content, (err) => {
        if (err != null) callback(err)
        else callback(null, true)
    })
}


export {objectToCSVCallback}