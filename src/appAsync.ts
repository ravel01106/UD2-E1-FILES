import { jsonToObjectAsyncAwait } from './aync-await/jsonObjectAsync'

async function main() {
  console.log('Esto es una función para el tema Async')
  try {
    const citiesData = await jsonToObjectAsyncAwait(__dirname + '/data/ciudades.json')
    const productsData = await jsonToObjectAsyncAwait(__dirname + '/data/products.json')
    console.log('\nDATOS DE LAS CUIDADES:\n')
    console.log(citiesData)
    console.log('\n\nDATOS DE LOS PRODUCTOS:\n')
    console.log(productsData)
  } catch (error) {
    console.log(error)
  }
}

main()

export {}
