import { JSONToObjectCallback } from './callbacks/jsonToObjectCallback'

function main(): void {
  console.log('Esto es una función para el tema Callback')
  const arrayPaths: string[] = [`/data/ciudades.json`, `/data/products.json`]

  // const ciudadesPath = __dirname + '/data/ciudades.json'

  arrayPaths.map((path: string) => {
    JSONToObjectCallback(__dirname + path, (err, data) => {
      if (err) return
      if (data != null) console.log(data)
      else return
    })
  })
}

main()

export {}
