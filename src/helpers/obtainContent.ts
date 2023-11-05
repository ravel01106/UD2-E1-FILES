const obtainHeader = (fields: string[]): string => {
    let content = ''

    fields.forEach((field) => {
        content += field.slice(0, 1).toUpperCase() + field.slice(1) + ','
    })

    content = content.slice(0, -1) + '\n'
    return content
}

const obtainContentWithoutFilter = <TObj>(fields: string[], jsonData: TObj[]): string => {
    let content = obtainHeader(fields)

    jsonData.forEach((data) => {
        fields.forEach((field) => {
            Object.keys(data as object).map((key) => {
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
    filter: (objData: TObjFilter) => boolean,
    ): string => {
    let content = obtainHeader(fields)

    jsonData.forEach((data) => {
        fields.forEach((field) => {
            Object.keys(data as object).map((key) => {
                if (field.toLowerCase() == key.toLowerCase() && filter(data)) {
                    content += data[key as keyof TObjFilter] + ','
                }
            })
        })
        if (content.endsWith(',')) content = content.slice(0, -1) + '\n'
    })
    return content
}

export { obtainContentWithoutFilter, obtainContentWithFilter}