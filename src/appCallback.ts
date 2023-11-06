import { JSONToObjectCallback } from './callbacks/jsonToObjectCallback'
import { objectToCSVCallback } from './callbacks/objectToCSVCallback'
import { ObjectToCSV } from './interfaces/objectToCSV'
import { City } from './interfaces/City'
import { Products } from './interfaces/Products'

function main(): void {
  console.log('-----------CALLBACK-----------\n')

  JSONToObjectCallback(__dirname + '/data/ciudades.json', (err, data) => {
    if (err) return
    if (data != null) {
      let params: ObjectToCSV<City> = {
        jsonData: data as City[],
        fields: ['capital', 'pais'],
        filePath: __dirname + '/exports/ciudades.csv',
      }
      objectToCSVCallback<City>(params, (err, data) => {
        if (err) console.log('Error al añadir el contenido en el fichero')
        if (data) console.log('Se ha añadido la información correctamente.')
      })
    } else return
  })

  JSONToObjectCallback(__dirname + '/data/products.json', (err, data) => {
    if (err) return
    if (data != null) {
      let params: ObjectToCSV<Products> = {
        jsonData: data as Products[],
        fields: ['name', 'stock', 'price'],
        filePath: __dirname + '/exports/products.csv',
        filter: (elto) => elto.category == 'B',
      }
      objectToCSVCallback<Products>(params, (err, data) => {
        if (err) console.log('Error al añadir el contenido en el fichero')
        if (data) console.log('Se ha añadido la información correctamente.')
      })
    } else return
  })
}

main()

export {}
