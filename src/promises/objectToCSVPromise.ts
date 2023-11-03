import { promises as fsPromises } from 'fs'

const obtainHeader = (fields: string[]): string => {
  let content = ''

  fields.forEach((field) => {
    content += field.slice(0, 1).toUpperCase() + field.slice(1) + ','
  })

  content = content.slice(0, -1) + '\n'
  return content
}

const obtainContent = <TObj>(fields: string[], jsonData: TObj[], content: string): string => {
  jsonData.forEach((data) => {
    Object.keys(data as object).map((key) => {
      fields.forEach((field) => {
        if (field.toLowerCase() == key.toLowerCase()) {
          content += data[key as keyof TObj] + ','
        }
      })
    })
    content = content.slice(0, -1) + '\n'
  })
  return content
}

const obtainContentWithFilter = <TObjFilter>(
  fields: string[],
  jsonData: TObjFilter[],
  content: string,
  filter: (objData: TObjFilter) => boolean,
): string => {
  jsonData.forEach((data) => {
    Object.keys(data as object).map((key) => {
      fields.forEach((field) => {
        if (field.toLowerCase() == key.toLowerCase() && filter(data)) {
          content += data[key as keyof TObjFilter] + ','
        }
      })
    })
    if (content.endsWith(',')) content = content.slice(0, -1) + '\n'
  })
  return content
}

function objectToCSVPromise<T>(
  jsonData: T[],
  fields: string[],
  filePath: string,
  filter?: (objData: T) => boolean,
): Promise<boolean> {
  return new Promise<boolean>((resolve, reject) => {
    let content = ''
    if (filter) {
      content = obtainHeader(fields) + obtainContentWithFilter<T>(fields, jsonData as T[], content, filter)
    } else {
      content = obtainHeader(fields) + obtainContent<T>(fields, jsonData as T[], content)
    }

    fsPromises
      .writeFile(filePath, content)
      .then(() => resolve(true))
      .catch(() => reject(false))
  })
}

export { objectToCSVPromise }
