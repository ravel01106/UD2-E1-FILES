import { jsonToObjectAsyncAwait } from './aync-await/jsonObjectAsync'

async function main() {
  console.log('Esto es una función para el tema Async')
  const citiesPath = __dirname + '/data/ciudades.json'
  const productsPath = __dirname + '/data/products.json'
  // const arrayPaths: string[] = [`/data/ciudades.json`, `/data/products.json`]
  try {
    const citiesData = await jsonToObjectAsyncAwait(citiesPath)
    const productsData = await jsonToObjectAsyncAwait(productsPath)
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
