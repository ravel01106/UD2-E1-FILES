const obtainHeader = (fields: string[]): string => {
  let content = ''

  fields.forEach((field) => {
    content += field.slice(0, 1).toUpperCase() + field.slice(1) + ','
  })

  content = content.slice(0, -1) + '\n'
  return content
}

const filterData = <TData>(jsonData: TData[], filter: (objData: TData) => boolean): TData[] => {
  let dataFilter: TData[] = []
  jsonData.forEach((data) => {
    if (filter(data)) {
      dataFilter.push(data)
    }
  })
  return dataFilter
}

const obtainContent = <TData>(fields: string[], jsonData: TData[], filter?: (objData: TData) => boolean): string => {
  let content = obtainHeader(fields)

  if (filter) {
    jsonData = filterData(jsonData, filter)
  }

  jsonData.forEach((data) => {
    fields.forEach((field) => {
      Object.keys(data as object).map((key) => {
        if (field.toLowerCase() == key.toLowerCase()) {
          content += data[key as keyof TData] + ','
        }
      })
    })
    if (content.endsWith(',')) content = content.slice(0, -1) + '\n'
  })

  return content
}

export { obtainContent }
