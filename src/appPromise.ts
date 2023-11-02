import { jsonToObjectPromise } from './promises/jsonObjectPromise'
import { objectToCSVPromise } from './promises/objectToCSVPromise'
import { City } from './interfaces/City'
import { Products } from './interfaces/Products'
function main(): void {
  console.log('Esto es una función para el tema Promise')
  const cities = __dirname + '/data/ciudades.json'
  const products = __dirname + '/data/products.json'
  const citiesExport = __dirname + '/exports/ciudades.csv'
  const productsExport = __dirname + '/exports/products.csv'

  jsonToObjectPromise(cities)
    .then((data) => {
      objectToCSVPromise<City>(data as City[], ['continente', 'pais'], citiesExport)
        .then(() => console.log('Se ha creado correctamente'))
        .catch(() => console.log('Fallo al crearse el fichero'))
    })
    .catch((err) => console.log(err))

  jsonToObjectPromise(products)
    .then((data) => {
      objectToCSVPromise<Products>(data as Products[], ['article', 'price'], productsExport)
        .then(() => console.log('Se ha creado correctamente'))
        .catch(() => console.log('Fallo al crearse el fichero'))
    })
    .catch((err) => console.log(err))
}

main()

export {}
