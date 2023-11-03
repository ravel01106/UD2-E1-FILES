import { jsonToObjectPromise } from './promises/jsonObjectPromise'
import { objectToCSVPromise } from './promises/objectToCSVPromise'
import { City } from './interfaces/City'
import { Products } from './interfaces/Products'
function main(): void {
  console.log('Esto es una función para el tema Promise')

  jsonToObjectPromise(__dirname + '/data/ciudades.json')
    .then((data) => {
      objectToCSVPromise<City>(data as City[], ['continente', 'pais'], __dirname + '/exports/ciudades.csv')
        .then(() => console.log('Se ha creado correctamente'))
        .catch(() => console.log('Fallo al crearse el fichero'))
    })
    .catch((err) => console.log(err))

  jsonToObjectPromise(__dirname + '/data/products.json')
    .then((data) => {
      objectToCSVPromise<Products>(
        data as Products[],
        ['article', 'price', 'category'],
        __dirname + '/exports/products.csv',
        (elto) => elto.category == 'B',
      )
        .then(() => console.log('Se ha creado correctamente'))
        .catch(() => console.log('Fallo al crearse el fichero'))
    })
    .catch((err) => console.log(err))
}

main()

export {}
