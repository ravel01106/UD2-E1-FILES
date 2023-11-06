
/**
 * In this function we will obtain the header for the content 
 * of the CSV file thanks to the fields passed by parameter. 
 * We will return the formatted header.
 * @param fields 
 * the fields we use to create the header
 * @returns 
 * the formatted header
 */

const obtainHeader = (fields: string[]): string => {
  let content = ''

  fields.forEach((field) => {
    content += field.slice(0, 1).toUpperCase() + field.slice(1) + ','
  })

  content = content.slice(0, -1) + '\n'
  return content
}

/**
 * Filters the array data, which are passed by parameter, that meet 
 * the condition of the filter which is also passed by parameter.
 * @param jsonData 
 * is the object array
 * @param filter 
 * is the function containing the condition to filter for 
 * @returns 
 * the filtered array object
 */

const filterData = <TData>(jsonData: TData[], filter: (objData: TData) => boolean): TData[] => {
  let dataFilter: TData[] = []
  jsonData.forEach((data) => {
    if (filter(data)) {
      dataFilter.push(data)
    }
  })
  return dataFilter
}

/**
 * Function that obtains the formatted content to write it inside the CSV file, 
 * thanks to the data and fields passed by parameter, if you also pass the 
 * filter parameter, the data will be filtered depending on the condition.
 * @param fields 
 * the fields we use to create the header
 * @param jsonData 
 * is the object array
 * @param filter 
 * is the function which, if the parameter exists as it is optional, 
 * contains the condition for filtering.
 * @returns 
 * the formatted content
 */

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
