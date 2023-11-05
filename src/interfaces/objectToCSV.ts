export interface ObjectToCSV<T>{
    jsonData: T[],
    fields: string[],
    filePath: string,
    filter?: (objData: T) => boolean,
}