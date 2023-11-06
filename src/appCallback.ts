import { JSONToObjectCallback } from './callbacks/jsonToObjectCallback'
import { objectToCSVCallback } from './callbacks/objectToCSVCallback'
import { ObjectToCSV } from './interfaces/objectToCSV'
import { City } from './interfaces/City'
import { Products } from './interfaces/Products'

/**
 * In this main function is where using the JSONToObjectCallback method 
 * we will get the data from the json files converting them into an 
 * array of objects, which will be passed to the objectToCSVCallback method 
 * to create the CSV file with the corresponding fields, paths and filters 
 * if they are added.
 */

function main(): void {
  console.log('-----------CALLBACK-----------\n')

  // We read the JSON file
  JSONToObjectCallback(__dirname + '/data/ciudades.json', (err, data) => {
    // If it cannot read the JSON file, it gives an error.
    if (err) return
    if (data != null) {
      // If you get the array of objects we create the parameters
      let params: ObjectToCSV<City> = {
        jsonData: data as City[],
        fields: ['capital', 'pais'],
        filePath: __dirname + '/exports/ciudades.csv',
      }
      // We create the CSV file
      objectToCSVCallback<City>(params, (err, data) => {
        // If it cannot write the CSV file, it gives an error.
        if (err) console.log('Error al añadir el contenido en el fichero')
        // If the file has been created it will display the following message
        if (data) console.log('Se ha añadido la información correctamente.')
      })
    }
  })

  // We read the JSON file
  JSONToObjectCallback(__dirname + '/data/products.json', (err, data) => {
    // If it cannot read the JSON file, it gives an error.
    if (err) return
    if (data != null) {
      // If you get the array of objects we create the parameters
      // in this case, with a filter
      let params: ObjectToCSV<Products> = {
        jsonData: data as Products[],
        fields: ['name', 'stock', 'price'],
        filePath: __dirname + '/exports/products.csv',
        filter: (elto) => elto.category == 'B',
      }
      // We create the CSV file
      objectToCSVCallback<Products>(params, (err, data) => {
        // If it cannot write the CSV file, it gives an error.
        if (err) console.log('Error al añadir el contenido en el fichero')
        // If the file has been created it will display the following message
        if (data) console.log('Se ha añadido la información correctamente.')
      })
    }
  })
}

main()

export {}
