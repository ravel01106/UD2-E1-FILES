import { jsonToObjectPromise } from './promises/jsonObjectPromise'
import { objectToCSVPromise } from './promises/objectToCSVPromise'
import { City } from './interfaces/City'
import { Products } from './interfaces/Products'
import { ObjectToCSV } from './interfaces/objectToCSV'
function main(): void {
  console.log('Esto es una función para el tema Promise')

  jsonToObjectPromise(__dirname + '/data/ciudades.json')
    .then((data) => {
      let params:ObjectToCSV<City> = {
        jsonData: data as City[],
        fields: ['pais', 'continente'],
        filePath:  __dirname + '/exports/ciudades.csv'
      }

      objectToCSVPromise<City>(params)
        .then(() => console.log('Se ha creado correctamente'))
        .catch(() => console.log('Fallo al crearse el fichero'))

      })
    .catch((err) => console.log(err))

  jsonToObjectPromise(__dirname + '/data/products.json')
    .then((data) => {
      let params:ObjectToCSV<Products> = {
        jsonData: data as Products[],
        fields: ['article', 'category', 'name'],
        filePath:  __dirname + '/exports/products.csv',
        filter: (elto) => elto.category == 'A',
      }

      objectToCSVPromise<Products>(params)
        .then(() => console.log('Se ha creado correctamente'))
        .catch(() => console.log('Fallo al crearse el fichero'))
    
      })
    .catch((err) => console.log(err))
}

main()

export {}
