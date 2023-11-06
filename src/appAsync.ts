import { jsonToObjectAsync } from './aync-await/jsonObjectAsync'
import { objectToCSVAsync } from './aync-await/objectToCSVAsync'
import { City } from './interfaces/City'
import { Products } from './interfaces/Products'
import { ObjectToCSV } from './interfaces/objectToCSV'

/**
 * In this main function is where using the jsonObjectAsyncAwait method 
 * we will get the data from the json files converting them into an 
 * array of objects, which will be passed to the objectToCSVAsync method 
 * to create the CSV file with the corresponding fields, paths and filters 
 * if they are added.
 */

async function main() {
  console.log('-----------ASYNC AWAIT-----------\n')
  try {
    // We read the JSON files
    const citiesData = await jsonToObjectAsync(__dirname + '/data/ciudades.json')
    const productsData = await jsonToObjectAsync(__dirname + '/data/products.json')
    console.log('Los datos se han leido correctamente.')

    // If you get the array of objects we create the parameters
    // in this case, with a filter
    let paramsCities: ObjectToCSV<City> = {
      jsonData: citiesData as City[],
      fields: ['capital', 'continente'],
      filePath: __dirname + '/exports/ciudades.csv',
      filter: (elto) => elto.Pais === 'Alemania',
    }

    // If you get the array of objects we create the parameters
    let paramsProducts: ObjectToCSV<Products> = {
      jsonData: productsData as Products[],
      fields: ['article', 'stock', 'category'],
      filePath: __dirname + '/exports/products.csv',
    }

    // We create the CSV files
    await objectToCSVAsync<City>(paramsCities)
    await objectToCSVAsync<Products>(paramsProducts)
    // If the file has been created it will display the following message
    console.log('Los datos se han introducido correctamente.')
  } catch (error) {
    // If it cannot read the JSON files or if it cannot write the CSV files, it gives an error.
    console.log(error)
  }
}

main()

export {}
