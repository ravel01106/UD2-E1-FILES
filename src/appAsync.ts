import { jsonToObjectAsyncAwait } from './aync-await/jsonObjectAsync'
import { objectToCSVAsync } from './aync-await/objectToCSVAsync'
import { City } from './interfaces/City'
import { Products } from './interfaces/Products'
import { ObjectToCSV } from './interfaces/objectToCSV'

async function main() {
  console.log('Esto es una función para el tema Async')
  try {
    const citiesData = await jsonToObjectAsyncAwait(__dirname + '/data/ciudades.json')
    const productsData = await jsonToObjectAsyncAwait(__dirname + '/data/products.json')
    console.log("Los datos se han leido correctamente.")

    let paramsCities:ObjectToCSV<City> = {
      jsonData: citiesData as City[],
      fields: ['capital', 'continente'],
      filePath:  __dirname + '/exports/ciudades.csv'
    }

    let paramsProducts:ObjectToCSV<Products> = {
      jsonData: productsData as Products[],
      fields: ['article', 'stock', 'category'],
      filePath:  __dirname + '/exports/products.csv',
      filter: (elto) => elto.category == 'C',
    }

    await objectToCSVAsync<City>(paramsCities)
    await objectToCSVAsync<Products>(paramsProducts)
    console.log("Los datos se han introducido correctamente.")
  } catch (error) {
    console.log(error)
  }
}

main()

export {}
