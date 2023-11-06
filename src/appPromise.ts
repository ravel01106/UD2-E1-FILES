import { jsonToObjectPromise } from './promises/jsonObjectPromise'
import { objectToCSVPromise } from './promises/objectToCSVPromise'
import { City } from './interfaces/City'
import { Products } from './interfaces/Products'
import { ObjectToCSV } from './interfaces/objectToCSV'

/**
 * In this main function is where using the jsonToObjectPromise method 
 * we will get the data from the json files converting them into an 
 * array of objects, which will be passed to the objectToCSVPromise method 
 * to create the CSV file with the corresponding fields, paths and filters 
 * if they are added.
 */

function main(): void {
  console.log('-----------PROMISE-----------\n')

  // We read the JSON file
  jsonToObjectPromise(__dirname + '/data/ciudades.json')
    .then((data) => {
      // If you get the array of objects we create the parameters
      let params: ObjectToCSV<City> = {
        jsonData: data as City[],
        fields: ['pais', 'continente'],
        filePath: __dirname + '/exports/ciudades.csv',
      }

      // We create the CSV file
      objectToCSVPromise<City>(params)
        // If the file has been created it will display the following message
        .then(() => console.log('Se ha creado el fichero con los datos correctamente'))
        // If it cannot write the CSV file, it gives an error.
        .catch(() => console.log('Fallo al crearse el fichero'))
    })
    // If it cannot read the JSON file, it gives an error.
    .catch((err) => console.log(err))

    // We read the JSON file
  jsonToObjectPromise(__dirname + '/data/products.json')
    .then((data) => {
      // If you get the array of objects we create the parameters
      // in this case, with a filter
      let params: ObjectToCSV<Products> = {
        jsonData: data as Products[],
        fields: ['article', 'category', 'name'],
        filePath: __dirname + '/exports/products.csv',
        filter: (elto) => elto.category == 'A',
      }

      // We create the CSV file
      objectToCSVPromise<Products>(params)
        // If the file has been created it will display the following message
        .then(() => console.log('Se ha creado el fichero con los datos correctamente'))
        // If it cannot write the CSV file, it gives an error.
        .catch(() => console.log('Fallo al crearse el fichero'))
    })
    // If it cannot read the JSON file, it gives an error.
    .catch((err) => console.log(err))
}

main()

export {}
